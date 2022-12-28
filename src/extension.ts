import * as vscode from "vscode";
import { PdfCustomProvider } from "./pdfProvider";

export function activate(context: vscode.ExtensionContext): void {
  const extensionRoot = vscode.Uri.file(context.extensionPath);
  const provider = new PdfCustomProvider(extensionRoot);
  const v1Uri = vscode.Uri.file(context.extensionPath + "/1.0_1110301.pdf");
  const v2Uri = vscode.Uri.file(context.extensionPath + "/2.0_1110928.pdf");

  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.lookup", () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const selection = editor.selection;
        const word = document.getText(selection);
        vscode.window.showInformationMessage(word);
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV1File", () => {
      console.log("File: " + v1Uri);
      vscode.commands.executeCommand(
        "vscode.openWith",
        v1Uri,
        PdfCustomProvider.viewType,
        vscode.ViewColumn.Beside
      );
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV2File", () => {
      console.log("File: " + v2Uri);
      vscode.commands.executeCommand(
        "vscode.openWith",
        v2Uri,
        PdfCustomProvider.viewType,
        vscode.ViewColumn.Beside
      );
    })
  );

  context.subscriptions.push(
    vscode.window.registerCustomEditorProvider(
      PdfCustomProvider.viewType,
      provider,
      {
        webviewOptions: {
          enableFindWidget: false, // default
          retainContextWhenHidden: true,
        },
      }
    )
  );
}

export function deactivate(): void {}
