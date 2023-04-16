# pdfmix

pdfmix is a command-line utility that allows you to combine multiple PDF files into a single output PDF file.

## Installation

Install pdfmix using npm:

```bash
npm install -g pdfmix
```

## Usage

To combine multiple PDF files into a single output PDF file, simply run the following command:

```bash
pdfmix -i input1.pdf input2.pdf input3.pdf -o output.pdf
```

## Options

| Option   | Alias | Description                     | Default |
| -------- | ----- | ------------------------------- | ------- |
| --input  | -i    | Input PDF files (required)      |         |
| --output | -o    | Output PDF file path (required) |         |

## Examples

Combine three PDF files into a single output PDF file:

```bash
pdfmix -i file1.pdf file2.pdf file3.pdf -o output.pdf
```

Combine two PDF files into a single output PDF file:

```bash
pdfmix -i file1.pdf file2.pdf -o output.pdf
```

## Show your support

Give a ⭐️ if this project helped you!
