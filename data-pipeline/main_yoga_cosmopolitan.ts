import puppeteer from 'puppeteer';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();


const columns=['headline_tag','headline','headline_url'];

const filePrefix = "yoga_cosmopolitan_result_";

async function main(){
    const browser = await puppeteer.launch({headless:false,defaultViewport:null});
    const page = await browser.newPage();
    let filename = filePrefix+new Date().getTime()+".csv";
    await fs.promises.writeFile(filename,columns.join(',')+"\n",{flag:'a'})
    while(true){
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");
        await page.goto(`https://www.cosmopolitan.com.hk/content/search/(keyword)/yoga?SearchText=yoga&Loc=searchbar`);
        console.log(`Scrapping Page`);
        await page.waitForSelector('.ResultContainer');
        
        const nextButtonExist = await page.evaluate(()=>{
            return document.querySelector('.GroupAnimation') !== null;
        });
        if(!nextButtonExist){
            console.log("End of List");
            break;
        }

        await page.evaluate(() => new Promise<void>((resolve) => {
            var scrollTop = -1;
            const interval = setInterval(() => {
              window.scrollBy(0, 100);
              if(document.documentElement.scrollTop !== scrollTop) {
                scrollTop = document.documentElement.scrollTop;
                return;
              }
              clearInterval(interval);
              resolve();
            }, 500);
          }));


        const yogaTexts = await page.evaluate(()=>{
            // window.scrollTo(0,document.body.scrollHeight);
            const yogas = document.querySelectorAll('.ResultContainer .KvItem');
            return Array.from(yogas).map(r=>{
                return {

                    headline_tag:(r.querySelector('.ShortTitle') as HTMLElement)?.innerText,
                    headline: (r.querySelector('.BoxTitle') as HTMLElement)?.innerText,
                    headline_url: (r.querySelector('.BoxTitle')as HTMLFormElement)?.href
                }
            });
        });

        yogaTexts.forEach(async (yoga)=>{
                const row = Object.values(yoga).join(',');
                await fs.promises.writeFile(filename,row+"\n",{flag:'a'});
        });



        // await page.waitForTimeout(1000);

    }
    await browser.close();
}

main();

