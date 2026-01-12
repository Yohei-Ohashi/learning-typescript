"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const area = {
    "hokkaido": ["北海道"],
    "tohoku": ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
    "kanto": ["東京都", "神奈川県", "千葉県", "埼玉県", "群馬県", "栃木県", "茨城県"],
    "chubu": ["富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県"],
    "kansai": ["大阪府", "兵庫県", "奈良県", "和歌山県"],
    "chugoku": ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
    "shikoku": ["徳島県", "香川県", "愛媛県", "高知県"],
    "kyushu": ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県"],
    "okinawa": ["沖縄県"],
};
for (const areaname in area) {
    if (Object.prototype.hasOwnProperty.call(area, areaname)) {
        console.log("--------------------------------");
        console.log(areaname);
        console.log("--------------------------------");
        for (const prefecture of area[areaname]) {
            console.log(prefecture);
        }
    }
}
//# sourceMappingURL=array04.js.map