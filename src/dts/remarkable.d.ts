/** remarkable.jsの型定義ファイルが見つからなかったので代わりにAny型で定義 */
declare module "remarkable" {
  var Remarkable: any;
  export = Remarkable;
}
// declare var Remarkable: any;
// declare class Remarkable{render: (str: string) => string}