const { writeFile } = require('fs').promises;
const os = require('os');
const path = require('path');

const { launch, setupMetamask } = require('@chainsafe/dappeteer');
const mkdirp = require('mkdirp');
const puppeteer = require('puppeteer');


const DIR = path.join(os.tmpdir(), 'jest_dappeteer_global_setup');

module.exports = async function () {
  const browser = await launch(puppeteer, {
    metamaskVersion: 'v10.15.0',
  });
  try {
    await setupMetamask(browser, {
      seed: 'pioneer casual canoe gorilla embrace width fiction bounce spy exhibit another dog',
    });
    global.browser = browser;
  } catch (error) {
    console.log(error);
    throw error;
  }

  mkdirp.sync(DIR);
  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
