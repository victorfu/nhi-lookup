# NHI 101

Display NHI information in VSCode.

## Contribute

### Upgrade PDF.js

1. Download latest [Prebuilt(older browsers)](https://mozilla.github.io/pdf.js/getting_started/#download).
2. Extract the ZIP file.
3. Overwrite ./lib/\* by extracted directories.
   - If lib/web/viewer.html has changes, apply these changes to HTML template at pdfPreview.ts.
4. To not use sample pdf.

- Remove sample pdf called `compressed.tracemonkey-pldi-09.pdf`.
- Remove code about using sample pdf from lib/web/viewer.js.
  ```js
  defaultUrl: {
    value: "", // "compressed.tracemonkey-pldi-09.pdf"
    kind: OptionKind.VIEWER
  },
  ```

## License

Please see [LICENSE](./LICENSE)
