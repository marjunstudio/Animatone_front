// 検索時の型
export interface SearchParams {
  [key: string]: any;
}

// 検索結果を受け取る配列
export interface SearchResultsProps {
  videos: Video[];
}

// YoutubeAPIからのレスポンス
export interface Video {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}