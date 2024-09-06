const translation = {
  steps: {
    header: {
      creation: 'ナレッジの作成',
      update: 'データの追加',
    },
    one: 'データソースの選択',
    two: 'テキストの前処理とクリーニング',
    three: '実行して完了',
  },
  error: {
    unavailable: 'このナレッジは利用できません',
  },
  firecrawl: {
    configFirecrawl: '🔥Firecrawlの設定',
    apiKeyPlaceholder: 'firecrawl.devからのAPIキー',
    getApiKeyLinkText: 'firecrawl.devからAPIキーを取得する',
  },
  stepOne: {
    filePreview: 'ファイルプレビュー',
    pagePreview: 'ページプレビュー',
    dataSourceType: {
      file: 'テキストファイルからインポート',
      notion: 'Notionから同期',
      web: 'ウェブサイトから同期',
    },
    uploader: {
      title: 'テキストファイルをアップロード',
      button: 'ファイルをドラッグ＆ドロップするか',
      browse: '参照',
      tip: '{{supportTypes}}をサポートしています。1つあたりの最大サイズは{{size}}MBです。',
      validation: {
        typeError: 'サポートされていないファイルタイプです',
        size: 'ファイルサイズが大きすぎます。最大サイズは{{size}}MBです',
        count: '複数のファイルはサポートされていません',
        filesNumber: 'バッチアップロードの制限（{{filesNumber}}個）に達しました。',
      },
      cancel: 'キャンセル',
      change: '変更',
      failed: 'アップロードに失敗しました',
    },
    notionSyncTitle: 'Notionが接続されていません',
    notionSyncTip: 'Notionと同期するには、まずNotionへの接続が必要です。',
    connect: '接続する',
    button: '次へ',
    emptyDatasetCreation: '空のナレッジを作成します',
    modal: {
      title: '空のナレッジを作成',
      tip: '空のナレッジにはドキュメントが含まれず、いつでもドキュメントをアップロードできます。',
      input: 'ナレッジ名',
      placeholder: '入力してください',
      nameNotEmpty: '名前は空にできません',
      nameLengthInvaild: '名前は1〜40文字である必要があります',
      cancelButton: 'キャンセル',
      confirmButton: '作成',
      failed: '作成に失敗しました',
    },
    website: {
      fireCrawlNotConfigured: 'Firecrawlが設定されていません',
      fireCrawlNotConfiguredDescription: 'Firecrawl を使用するには、Firecrawl の API キーを設定してください。',
      configure: '設定',
      run: '実行',
      firecrawlTitle: '🔥Firecrawlを使っでウエブコンテンツを抽出',
      firecrawlDoc: 'Firecrawlドキュメント',
      firecrawlDocLink: 'https://docs.dify.ai/guides/knowledge-base/sync-from-website',
      options: 'オプション',
      crawlSubPage: 'サブページをクロールする',
      limit: '制限',
      maxDepth: '最大深度',
      excludePaths: 'パスを除外する',
      includeOnlyPaths: 'パスのみを含める',
      extractOnlyMainContent: 'メインコンテンツのみを抽出する(ヘッダー、ナビ、フッターなどは抽出しない)',
      exceptionErrorTitle: 'Firecrawl ジョブの実行中に例外が発生しました:',
      unknownError: '不明なエラー',
      totalPageScraped: 'スクレイピングされた総ページ数:',
      selectAll: 'すべて選択',
      resetAll: 'すべてリセット',
      scrapTimeInfo: '{{time}} 秒以内に合計 {{total}} ページをスクレイピングしました',
      preview: 'プレビュー',
      maxDepthTooltip: '入力されたURLを基にしたクローリング作業での設定可能な最大深度について説明します。深度0は入力されたURL自体のページを対象としたスクレイピングを意味します。深度1では、元のURLの直下にあるページ（URLに続く最初の"/"以降の内容）もスクレイピングの対象になります。この深度は指定した数値まで増加させることができ、それに応じてスクレイピングの範囲も広がっていきます。',
    },
  },
  stepTwo: {
    segmentation: 'チャンク設定',
    auto: '自動',
    autoDescription: 'チャンクと前処理ルールを自動的に設定します。初めてのユーザーはこれを選択することをおすすめします。',
    custom: 'カスタム',
    customDescription: 'チャンクのルール、チャンクの長さ、前処理ルールなどをカスタマイズします。',
    separator: 'セグメント識別子',
    separatorPlaceholder: '例えば改行（\\\\n）や特殊なセパレータ（例：「***」）',
    maxLength: '最大チャンク長',
    overlap: 'チャンクのオーバーラップ',
    overlapTip: 'チャンクのオーバーラップを設定することで、それらの間の意味的な関連性を維持し、検索効果を向上させることができます。最大チャンクサイズの10%〜25%を設定することをおすすめします。',
    overlapCheck: 'チャンクのオーバーラップは最大チャンク長を超えてはいけません',
    rules: 'テキストの前処理ルール',
    removeExtraSpaces: '連続するスペース、改行、タブを置換する',
    removeUrlEmails: 'すべてのURLとメールアドレスを削除する',
    removeStopwords: '「a」「an」「the」などのストップワードを削除する',
    preview: '確認＆プレビュー',
    reset: 'リセット',
    indexMode: 'インデックスモード',
    qualified: '高品質',
    recommend: 'おすすめ',
    qualifiedTip: 'ユーザーのクエリに対してより高い精度を提供するために、デフォルトのシステム埋め込みインターフェースを呼び出して処理します。',
    warning: 'モデルプロバイダのAPIキーを設定してください。',
    click: '設定に移動',
    economical: '経済的',
    economicalTip: 'オフラインのベクトルエンジン、キーワードインデックスなどを使用して、トークンを消費せずに精度を低下させます。',
    QATitle: '質問と回答形式でセグメント化',
    QATip: 'このオプションを有効にすると、追加のトークンが消費されます',
    QALanguage: '使用言語',
    emstimateCost: '見積もり',
    emstimateSegment: '推定チャンク数',
    segmentCount: 'チャンク',
    calculating: '計算中...',
    fileSource: 'ドキュメントの前処理',
    notionSource: 'ページの前処理',
    websiteSource: 'ウエブサイドの前処理',
    other: 'その他',
    fileUnit: 'ファイル',
    notionUnit: 'ページ',
    webpageUnit: ' ページ',
    previousStep: '前のステップ',
    nextStep: '保存して処理',
    save: '保存して処理',
    cancel: 'キャンセル',
    sideTipTitle: 'なぜチャンクと前処理が必要なのか',
    sideTipP1: 'テキストデータを処理する際、チャンクとクリーニングは2つの重要な前処理ステップです。',
    sideTipP2: 'セグメンテーションは長いテキストを段落に分割し、モデルがより理解しやすくします。これにより、モデルの結果の品質と関連性が向上します。',
    sideTipP3: 'クリーニングは不要な文字や書式を削除し、ナレッジをよりクリーンで解析しやすいものにします。',
    sideTipP4: '適切なチャンクとクリーニングはモデルのパフォーマンスを向上させ、より正確で価値のある結果を提供します。',
    previewTitle: 'プレビュー',
    previewTitleButton: 'プレビュー',
    previewButton: 'Q&A形式に切り替える',
    previewSwitchTipStart: '現在のチャンクプレビューはテキスト形式です。質問と回答形式のプレビューに切り替えると、',
    previewSwitchTipEnd: ' 追加のトークンが消費されます',
    characters: '文字',
    indexSettedTip: 'インデックス方法を変更するには、',
    retrivalSettedTip: '検索方法を変更するには、',
    datasetSettingLink: 'ナレッジ設定',
  },
  stepThree: {
    creationTitle: '🎉 ナレッジが作成されました',
    creationContent: 'ナレッジの名前は自動的に設定されましたが、いつでも変更できます',
    label: 'ナレッジ名',
    additionTitle: '🎉 ドキュメントがアップロードされました',
    additionP1: 'ドキュメントはナレッジにアップロードされました',
    additionP2: '、ナレッジのドキュメントリストで見つけることができます。',
    stop: '処理を停止',
    resume: '処理を再開',
    navTo: 'ドキュメントに移動',
    sideTipTitle: '次は何ですか',
    sideTipContent: 'ドキュメントのインデックスが完了したら、ナレッジをアプリケーションのコンテキストとして統合することができます。プロンプトオーケストレーションページでコンテキスト設定を見つけることができます。また、独立したChatGPTインデックスプラグインとしてリリースすることもできます。',
    modelTitle: '埋め込みを停止してもよろしいですか？',
    modelContent: '後で処理を再開する必要がある場合は、中断した場所から続行します。',
    modelButtonConfirm: '確認',
    modelButtonCancel: 'キャンセル',
  },
}

export default translation
