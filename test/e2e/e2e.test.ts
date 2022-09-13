import * as assert from 'assert';
import path from 'path';

import { expect } from 'chai';


import * as http from 'http';

import ganache from 'ganache-core';
import handler from 'serve-handler';


async function deploy() {
  await waitForGanache();
  await startTestServer();
}

async function waitForGanache() {
  console.log('Starting ganache...');
  const server = ganache.server({ seed: 'asd123' });
  return await new Promise((resolve) => {
    server.listen(8545, () => {
      console.log('Ganache running at http://localhost:8545');
      resolve(server.provider);
    });
  });
}

async function startTestServer() {
  console.log('Starting test server...');
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: path.join(__dirname, 'dapp'),
      cleanUrls: true,
    });
  });

  await new Promise<void>((resolve) => {
    server.listen(8080, () => {
      console.log('Server running at http://localhost:8080');
      resolve();
    });
  });
}


async function clickElement(page, selector): Promise<void> {
  await page.bringToFront();
  await page.waitForSelector(selector);
  const element = await page.$(selector);
  await element.click();
}

let browser, metamask, testPage;

describe('dappeteer', () => {
  beforeAll(async () => {
    await deploy();
    browser = global.browser
    metamask = global.metamask
    testPage = await browser.newPage();
    await testPage.goto('http://localhost:8080');
  });


  it('should running, puppeteer', async () => {
    assert.ok(browser);
  });

  it('should open, metamask', async () => {
    assert.ok(metamask);
  });

  it('should open, test page', async () => {
    assert.ok(testPage);
    assert.equal(await testPage.title(), 'Local metamask test');
  });

  it('should add network', async () => {
    await metamask.addNetwork({
      networkName: 'Binance Smart Chain',
      rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      symbol: 'BNB',
      explorer: 'https://testnet.bscscan.com',
    });

    const selectedNetwork = await metamask.page.evaluate(
      () => (document.querySelector('.network-display > span:nth-child(2)') as HTMLSpanElement).innerHTML,
    );
    assert.equal(selectedNetwork, 'Binance Smart Chain');
  });

  it('should switch network, localhost', async () => {
    await metamask.switchNetwork('localhost');

    const selectedNetwork = await metamask.page.evaluate(
      () => (document.querySelector('.network-display > span:nth-child(2)') as HTMLSpanElement).innerHTML,
    );
    assert.equal(selectedNetwork, 'Localhost 8545');
  });

  it('should import private key', async () => {
    await metamask.importPK('4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b10');
  });

  it('should switch accounts', async () => {
    await metamask.switchAccount(1);
  });

  it('should add token', async () => {
    await metamask.switchNetwork('kovan');
    await metamask.addToken({
      tokenAddress: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
      symbol: 'TEST',
      decimals: 18
    });
    await metamask.switchNetwork('localhost');
  });

  it('should lock and unlock', async () => {
    await metamask.lock();
    await metamask.unlock('password1234');
  });

  it('should return token balance', async () => {
    const tokenBalance: number = await metamask.helpers.getTokenBalance('ETH');
    expect(tokenBalance).to.be.greaterThan(0);
  });

  it('should return 0 token balance when token not found', async () => {
    const tokenBalance: number = await metamask.helpers.getTokenBalance('FARTBUCKS');
    expect(tokenBalance).to.be.equal(0);
  });

  it('should connect to ethereum', async () => {
    await clickElement(testPage, '.connect-button');
    await metamask.approve();

    // For some reason initial approve does not resolve nor fail promise
    await clickElement(testPage, '.connect-button');
    await testPage.waitForSelector('#connected');
  });
  it('should be able to sign', async () => {
    await clickElement(testPage, '.sign-button');
    await metamask.sign();

    await testPage.waitForSelector('#signed');
  });

  afterAll(async () => {
    // close browser
    await browser.close();
  });
});