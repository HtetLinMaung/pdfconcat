#!/usr/bin/env node

import { program } from "commander";
import { PDFDocument } from "pdf-lib";
import fs from "fs";
import path from "path";

program
  .version("1.0.0")
  .description("Combine multiple PDF files into a single PDF file")
  .requiredOption("-i, --input <files...>", "Input PDF files")
  .requiredOption("-o, --output <output>", "Output PDF file path")
  .parse(process.argv);

(async () => {
  const options = program.opts();
  const inputFiles = options.input;
  const outputFile = options.output;

  const combinedPdf = await PDFDocument.create();

  for (const inputFile of inputFiles) {
    const pdfBytes = fs.readFileSync(inputFile);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();

    for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      const [page] = await combinedPdf.copyPages(pdfDoc, [pageIndex]);
      combinedPdf.addPage(page);
    }
  }

  const mergedPdfBytes = await combinedPdf.save();
  fs.writeFileSync(path.join(process.cwd(), outputFile), mergedPdfBytes);
})();
