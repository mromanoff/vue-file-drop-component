// LIST Common MIME types
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

export const ALLOWED_FILE_EXTENSIONS = [
  ".ai",
  ".pdf",
  ".jpg",
  ".jpeg",
  ".png",
  ".doc",
  ".psd",
  ".xls",
];

export const ALLOWED_FILES = {
  ai: "application/postscript",
  pdf: "application/pdf",
  jpg: "image/jpeg",
  png: "image/png",
  doc: "application/msword",
  psd: "image/vnd.adobe.photoshop",
  xls: "application/vnd.ms-excel",
};
