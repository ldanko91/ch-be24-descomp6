import multer from 'multer';

const MulterMiddleware = (destination) => {
  let uploadPath;

  switch (destination) {
    case 'profile':
      uploadPath = process.cwd()+'/public/images/profile';
      break;
    case 'products':
      uploadPath = process.cwd()+'/public/images/products';
      break;
    case 'documents':
      uploadPath = process.cwd()+'/public/images/documents';
      break;
    default:
      throw new Error('Invalid destination');
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const originalName = file.originalname.replace(/\s/g, "");
      cb(null, Date.now() + "-" + originalName);
    },
  });

  return multer({ storage: storage });
};

export default MulterMiddleware;