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
    ]);
  }
}
