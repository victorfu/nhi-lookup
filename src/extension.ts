import * as vscode from "vscode";
import {
  getDailyDocV1Uri,
  getDailyDocV2Uri,
  getMonthlyDocUri,
  getPayDocUri,
  NhiDocumentProvider,
} from "./nhiDocumentProvider";
import {
  findTagPage,
  TYPE_DAILY_DOC_V1,
  TYPE_DAILY_DOC_V2,
  TYPE_MONTHLY_DOC,
} from "./pages";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";
import { PdfCustomProvider } from "./pdfProvider";

const openFile = async (uri: vscode.Uri, isFull: boolean): Promise<void> => {
  await vscode.commands.executeCommand(
    "vscode.openWith",
    uri,
    PdfCustomProvider.viewType,
    isFull ? vscode.ViewColumn.One : vscode.ViewColumn.Beside
  );
};

export function activate(context: vscode.ExtensionContext): void {
  const extensionRoot = vscode.Uri.file(context.extensionPath);
  const provider = new PdfCustomProvider(extensionRoot);
  const dailyDocV1Uri = getDailyDocV1Uri(context.extensionPath);
  const dailyDocV2Uri = getDailyDocV2Uri(context.extensionPath);
  const monthlyDocUri = getMonthlyDocUri(context.extensionPath);
  const payDocUri = getPayDocUri(context.extensionPath);

  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV1DFile", () =>
      openFile(dailyDocV1Uri, false)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV2DFile", () =>
      openFile(dailyDocV2Uri, false)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openMFile", () =>
      openFile(monthlyDocUri, false)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openPFile", () =>
      openFile(payDocUri, false)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV1DFileFull", () =>
      openFile(dailyDocV1Uri, true)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV2DFileFull", () =>
      openFile(dailyDocV2Uri, true)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openMFileFull", () =>
      openFile(monthlyDocUri, true)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openPFileFull", () =>
      openFile(payDocUri, true)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.lookup", async () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const selection = editor.selection;
        const word = document.getText(selection);
        const [page, type] = findTagPage(word);

        if (page === -1) {
          vscode.window.showInformationMessage("查無此標籤: " + word);
          return;
        }
        vscode.window.showInformationMessage("查詢中...");

        if (type === TYPE_DAILY_DOC_V1) {
          await openFile(dailyDocV1Uri, false);
        } else if (type === TYPE_DAILY_DOC_V2) {
          await openFile(dailyDocV2Uri, false);
        } else if (type === TYPE_MONTHLY_DOC) {
          await openFile(monthlyDocUri, false);
        }

        setTimeout(() => {
          provider.goToPage(page);
          vscode.window.showInformationMessage(
            "查詢成功，前往第 " + page + " 頁"
          );
        }, 1000);
      }
    })
  );

  const view = vscode.window.createTreeView("nhi-docs", {
    treeDataProvider: new NhiDocumentProvider(),
    showCollapseAll: true,
  });
  context.subscriptions.push(view);

  context.subscriptions.push(
    vscode.window.registerCustomEditorProvider(
      PdfCustomProvider.viewType,
      provider,
      {
        webviewOptions: {
          enableFindWidget: false,
          retainContextWhenHidden: true,
        },
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.showHelloWorld", () => {
      HelloWorldPanel.render(context.extensionUri);
    })
  );
}

export function deactivate(): void {}
