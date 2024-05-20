import * as vscode from "vscode";
import * as path from "path";

class DocumentItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private version: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}-${this.version}`;
    this.description = this.version;
    this.command = command;
  }

  iconPath = {
    light: path.join(
      __filename,
      "..",
      "..",
      "resources",
      "light",
      "dependency.svg"
    ),
    dark: path.join(
      __filename,
      "..",
      "..",
      "resources",
      "dark",
      "dependency.svg"
    ),
  };
}

export const getDailyDocV1Uri = (extensionPath: string): vscode.Uri => {
  const dailyDocV1Uri = vscode.Uri.file(extensionPath + "/1.0_1110301.pdf");
  return dailyDocV1Uri;
};
export const getDailyDocV2Uri = (extensionPath: string): vscode.Uri => {
  const dailyDocV2Uri = vscode.Uri.file(extensionPath + "/2.0_1120831.pdf");
  return dailyDocV2Uri;
};
export const getMonthlyDocUri = (extensionPath: string): vscode.Uri => {
  const monthlyDocUri = vscode.Uri.file(extensionPath + "/1120825.pdf");
  return monthlyDocUri;
};
export const getPayDocUri = (extensionPath: string): vscode.Uri => {
  const payDocUri = vscode.Uri.file(extensionPath + "/pay_std_1121101.pdf");
  return payDocUri;
};
export const getNhiCardDocUri = (extensionPath: string): vscode.Uri => {
  const nhiCardDocUri = vscode.Uri.file(extensionPath + "/nhicard_1041116.pdf");
  return nhiCardDocUri;
};

export class NhiDocumentProvider
  implements vscode.TreeDataProvider<DocumentItem> {
  constructor() {}

  getTreeItem(element: DocumentItem): vscode.TreeItem {
    return element;
  }

  getChildren(): Thenable<DocumentItem[]> {
    return Promise.resolve([
      new DocumentItem(
        "日上傳1.0文件",
        "",
        vscode.TreeItemCollapsibleState.None,
        {
          title: "openV1DFile",
          command: "nhi.openV1DFileFull",
        }
      ),
      new DocumentItem(
        "日上傳2.0文件",
        "",
        vscode.TreeItemCollapsibleState.None,
        {
          title: "openV2DFile",
          command: "nhi.openV2DFileFull",
        }
      ),
      new DocumentItem("月申報文件", "", vscode.TreeItemCollapsibleState.None, {
        title: "openMFile",
        command: "nhi.openMFileFull",
      }),
      new DocumentItem(
        "牙科支付標準",
        "",
        vscode.TreeItemCollapsibleState.None,
        {
          title: "openPayFile",
          command: "nhi.openPFileFull",
        }
      ),
      new DocumentItem("健保卡格式", "", vscode.TreeItemCollapsibleState.None, {
        title: "openNhiCardFile",
        command: "nhi.openNhiCardFileFull",
      }),
    ]);
  }
}
