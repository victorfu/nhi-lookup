import * as vscode from "vscode";
import { PdfCustomProvider } from "./pdfProvider";

export function activate(context: vscode.ExtensionContext): void {
  console.log('Extension "zz" is now active!');
  const extensionRoot = vscode.Uri.file(context.extensionPath);
  const provider = new PdfCustomProvider(extensionRoot);
  const uri = vscode.Uri.file(context.extensionPath + "/1110301.pdf");

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
    vscode.commands.registerCommand("nhi.openFile", () => {
      console.log("Opening " + uri);
      vscode.commands.executeCommand(
        "vscode.openWith",
        uri,
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
