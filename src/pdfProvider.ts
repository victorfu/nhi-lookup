import * as vscode from "vscode";
import { PdfPreview } from "./pdfPreview";

export class PdfCustomProvider implements vscode.CustomReadonlyEditorProvider {
  public static readonly viewType = "pdf.preview";

  private readonly _previews = new Set<PdfPreview>();
  private _activePreview: PdfPreview | undefined;

  constructor(private readonly extensionRoot: vscode.Uri) {}

  public openCustomDocument(uri: vscode.Uri): vscode.CustomDocument {
    return { uri, dispose: (): void => {} };
  }

  public goToPage(page: number): void {
    this._activePreview?.goToPage(page);
  }

  public async resolveCustomEditor(
    document: vscode.CustomDocument,
    webviewEditor: vscode.WebviewPanel
  ): Promise<void> {
    const preview = new PdfPreview(
      this.extensionRoot,
      document.uri,
      webviewEditor
    );
    this._previews.add(preview);
    this.setActivePreview(preview);

    webviewEditor.onDidDispose(() => {
      preview.dispose();
      this._previews.delete(preview);
    });

    webviewEditor.onDidChangeViewState(() => {
      if (webviewEditor.active) {
        this.setActivePreview(preview);
      } else if (this._activePreview === preview && !webviewEditor.active) {
        // TODO: disable this for now, because we need to control the active preview. Consider better way to handle this
        // this.setActivePreview(undefined);
      }
    });
  }

  public get activePreview(): PdfPreview {
    return this._activePreview;
  }

  private setActivePreview(value: PdfPreview | undefined): void {
    this._activePreview = value;
  }
}
