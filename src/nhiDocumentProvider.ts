import * as vscode from "vscode";
import * as path from "path";

class Dependency extends vscode.TreeItem {
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
  implements vscode.TreeDataProvider<Dependency> {
  constructor() {}

  getTreeItem(element: Dependency): vscode.TreeItem {
    return element;
  }

  getChildren(): Thenable<Dependency[]> {
    vscode.window.showInformationMessage("No dependency in empty workspace");
    return Promise.resolve([
      new Dependency(
        "日上傳1.0文件",
        "",
        vscode.TreeItemCollapsibleState.None,
        {
          title: "openV1DFile",
          command: "nhi.openV1DFile",
        }
      ),
      new Dependency(
        "日上傳2.0文件",
        "",
        vscode.TreeItemCollapsibleState.None,
        {
          title: "openV2DFile",
          command: "nhi.openV2DFile",
        }
      ),
      new Dependency("月申報文件", "", vscode.TreeItemCollapsibleState.None, {
        title: "openMFile",
        command: "nhi.openMFile",
      }),
    ]);
  }
}
