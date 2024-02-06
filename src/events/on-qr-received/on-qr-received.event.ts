const qrCode = require("qrcode-terminal");

export const onQrReceived = (qr: any) => {
  qrCode.generate(qr, { small: true });
};
