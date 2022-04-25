import { Body, Controller, Header, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfGenerateDto } from './generate.pdf.dto';
import { Response } from 'express';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('pdf')
export class PdfController {

    constructor (private pdfService: PdfService) {}

    @Post('generate')
    @HttpCode(HttpStatus.OK)
    @Header('Content-Type', 'application/pdf')
    @Header('Content-Disposition', 'attachment; filename=test.pdf')
    @ApiBody({ type: PdfGenerateDto })
    @ApiTags('pdf-generator')
    @ApiOkResponse({ description: 'Converted html into pdf file', type: Buffer})
    public async generatePdf(@Body() pdfGenerateDto: PdfGenerateDto, @Res() res: Response): Promise<Response<Buffer>> {
        const pdf = await this.pdfService.generatePDF(pdfGenerateDto.htmlContent);
        return res.send(pdf);
    }
}
