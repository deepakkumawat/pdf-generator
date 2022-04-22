import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PdfGenerateDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'HTML to convert into PDF',
        default: '<html><head></head><body><h1>HTML 2 PDF</h1></body></html>',
        required: true,
        type: String
      })
    readonly htmlContent: string;
}