import * as vscode from "vscode";
import { NhiDocumentProvider } from "./nhiDocumentProvider";
import {
  findTagPage,
  TYPE_DAILY_DOC_V1,
  TYPE_DAILY_DOC_V2,
  TYPE_MONTHLY_DOC,
} from "./pages";
import { PdfCustomProvider } from "./pdfProvider";

export function activate(context: vscode.ExtensionContext): void {
  const extensionRoot = vscode.Uri.file(context.extensionPath);
  const provider = new PdfCustomProvider(extensionRoot);
  const dailyDocV1Uri = vscode.Uri.file(
    context.extensionPath + "/1.0_1110301.pdf"
  );
  const dailyDocV2Uri = vscode.Uri.file(
    context.extensionPath + "/2.0_1110928.pdf"
  );
  const monthlyDocUri = vscode.Uri.file(context.extensionPath + "/1110429.pdf");
  const payDocUri = vscode.Uri.file(context.extensionPath + "/1111201.pdf");

  const openDailyDocV1 = async (isFull: boolean): Promise<void> => {
    await vscode.commands.executeCommand(
      "vscode.openWith",
      dailyDocV1Uri,
      PdfCustomProvider.viewType,
      isFull ? vscode.ViewColumn.One : vscode.ViewColumn.Beside
    );
  };
  const openDailyDocV2 = async (isFull: boolean): Promise<void> => {
    await vscode.commands.executeCommand(
      "vscode.openWith",
      dailyDocV2Uri,
      PdfCustomProvider.viewType,
      isFull ? vscode.ViewColumn.One : vscode.ViewColumn.Beside
    );
  };
  const openMonthlyDoc = async (isFull: boolean): Promise<void> => {
    await vscode.commands.executeCommand(
      "vscode.openWith",
      monthlyDocUri,
      PdfCustomProvider.viewType,
      isFull ? vscode.ViewColumn.One : vscode.ViewColumn.Beside
    );
  };
  const openPayDoc = async (isFull: boolean): Promise<void> => {
    await vscode.commands.executeCommand(
      "vscode.openWith",
      payDocUri,
      PdfCustomProvider.viewType,
      isFull ? vscode.ViewColumn.One : vscode.ViewColumn.Beside
    );
  };

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
          await openDailyDocV1(false);
        } else if (type === TYPE_DAILY_DOC_V2) {
          await openDailyDocV2(false);
        } else if (type === TYPE_MONTHLY_DOC) {
          await openMonthlyDoc(false);
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

  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV1DFile", () =>
      openDailyDocV1(false)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV2DFile", () =>
      openDailyDocV2(false)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openMFile", () =>
      openMonthlyDoc(false)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openPFile", () => openPayDoc(false))
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV1DFileFull", () =>
      openDailyDocV1(true)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openV2DFileFull", () =>
      openDailyDocV2(true)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openMFileFull", () =>
      openMonthlyDoc(true)
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("nhi.openPFileFull", () => openPayDoc(true))
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

  const view = vscode.window.createTreeView("nhi-docs", {
    treeDataProvider: new NhiDocumentProvider(),
    showCollapseAll: true,
  });
  context.subscriptions.push(view);
}

export function deactivate(): void {}
