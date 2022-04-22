import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfService {

    public async generatePDF(content: string) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(content);
        const pdf = await page.pdf({format: 'a4' });
        await browser.close();
        return pdf;
    }
}
