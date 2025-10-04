//array  push() vs pop()
// for i
//while
// for .. of

// const possibleBanner = ['xxx', '.cookie-banner', '[data-xxx']
// const visibleBanner = '.cookie-banner'

// for (const selector of possibleBanner) {
//     console.log(`selector check: ${selector}`)
//     if (selector === visibleBanner) {
//         console.log('banner found')
//         break
//     }
// }

// const logEntries = [
//     't=1m service=PAYMENT status=OK uid =101',
//     't=2m service=USER_AUTH status=FAIL uid=205 err_code=401',
//     't=3m service=INVENTORY status=OK uid=302',
//     't=4m service=USER_AUTH status=OK uid=205',
//     't=5m service=USER_AUTH status=FAIL uid=404 err_code=404',
// ]
// let failedLogInfo = null

// for (const log of logEntries) {
//     if (log.includes('service=USER_AUTH') && (log.includes('status=FAIL'))) {
//         console.log(`found auth fail log: ${log}`)

//         const parts = log.split(' ')
//         console.log(`parts: ${parts}`)
//         let uid = null
//         let errorCode = null

//         for (part of parts) {
//             if (part.startsWith('uid=')) {
//                 uid = part.replace('uid=', '')
//             }
//             if (part.startsWith('err_code=')) {
//                 //errorCode = part.replace('err_code=', '')
//                 errorCode = part.slice('err_code='.length)
//             }
//         }
//         console.log(`failedLogInfo: ${uid}, ${errorCode}`)
//         break
//     }
// }

//map(function(item, index, array))
//filter(function(item,index, array))
//find(function(item))
//array object
// const products = [
//     { name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
//     { name: 'T-shrit', category: 'Cotton', price: 25, inStock: true },
//     { name: 'Mouse', category: 'Electronics', price: 105, inStock: false },
// ]

// const searchItem = products.filter(function (product) {
//     return product.category === 'Electronics' && product.inStock
// }).map(function (product) {
//     return {
//         name: product.name,
//         finalPrice: product.price * 0.9
//     }
// }).find(function (product) {
//     return product.finalPrice < 1200
// })

// console.log(searchItem)


// -------------------------Homework----------------------------------
// const globalConfig = {
//     thoiDiem: "giờ cao điểm", // 'bình thường', 'ban đêm'
//     coSuKienDacBiet: true,
//     mucDoCanhBaoThoiTiet: "bình thường" // 'xấu', 'nguy hiểm'
// };

// const tuyenDuongChinh = ["GL01", "GL03"];
// const duLieuGiaoThong = [
//     { id: "GL01", luongXe: "cao", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." } },
//     { id: "GL02", luongXe: "trung bình", coNguoiDiBoCho: false, coXeCuuThuong: true, camBienPhu: {} },
//     { id: "GL03", luongXe: "thấp", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: {} },
//     { id: "GL04", luongXe: "cao", coNguoiDiBoCho: false, coXeCuuThuong: false, camBienPhu: { ghiChu: "Hoạt động ổn định." } }
// ];

// function lenhDieuKhien(globalConfig, duLieuGiaoThong, tuyenDuongChinh) {
//     let thoiGianDenCoBan;
//     if (globalConfig.thoiDiem === 'giờ cao điểm') {
//         thoiGianDenCoBan = 30;
//     } else if (globalConfig.thoiDiem === 'ban đêm') {
//         thoiGianDenCoBan = 90;
//     } else {
//         thoiGianDenCoBan = 60;
//     }
//     return duLieuGiaoThong.map(function (giaoLo) {
//         let diemUuTien = 0
//         if (giaoLo.coXeCuuThuong === true) {
//             diemUuTien += 50
//         }
//         if (giaoLo.luongXe === "cao" && globalConfig.thoiDiem === 'giờ cao điểm') {
//             diemUuTien += 20
//         }
//         if (giaoLo.coNguoiDiBoCho === true) {
//             diemUuTien += 10
//         }
//         if (giaoLo.coNguoiDiBoCho === true) {
//             diemUuTien += 10
//         }
//         if (globalConfig.coSuKienDacBiet === true && tuyenDuongChinh.includes(giaoLo.id)) {
//             diemUuTien += 10
//         }

//         let hanhdong
//         if (giaoLo.coXeCuuThuong === true)
//             hanhdong = "ƯU TIÊN TUYỆT ĐỐI, MỞ LÀN KHẨN CẤP"
//         else if (diemUuTien > 30) {
//             hanhdong = "Tăng thời lượng đèn xanh"
//         } else {
//             hanhdong = "Vận hành theo chu kì cơ bản"
//         }

//         if (globalConfig.mucDoCanhBaoThoiTiet === "nguy hiểm") {
//             hanhdong += " & CẢNH BÁO TRƠN TRƯỢT"
//         }

//         // const ghiChuBaoTri = giaoLo.camBienPhughiChu ? giaoLo.camBienPhu.ghiChu : "Không có"
//         const ghiChuBaoTri = giaoLo.camBienPhu?.ghiChu || "Không có"


//         return {
//             id: giaoLo.id,
//             thoiGianDenXanh: thoiGianDenCoBan,
//             diemUuTien: diemUuTien,
//             hanhdong: hanhdong,
//             ghiChuBaoTri: ghiChuBaoTri,
//             coXeCuuThuong: giaoLo.coXeCuuThuong
//         }
//     })
// }
// const lenh = lenhDieuKhien(globalConfig, duLieuGiaoThong, tuyenDuongChinh)
// console.log(lenh)

// const danhSanhNong = lenh.filter(function (giaoLo) {

//     return giaoLo.coXeCuuThuong || giaoLo.diemUuTien > 30
// })

// console.log(danhSanhNong)

//------------Day 05 extra-----------------------------------

// arrow function
//hoisting
// console.log(x(1, 2));
// function x0(a, b) { return a + b; }
// const x = (a, b) => a + b;
// const x1 = (a, b) => { return a + b };
// const x2 = function (a, b) { return a + b; }

//Ex
const gioHang = [
    { id: 'SP001', ten: 'Laptop Gaming XYZ', danhMuc: 'Dien Tu', gia: 30000000, soLuong: 1 },
    { id: 'SP002', ten: 'Ao Thun Polo', danhMuc: 'Thoi Trang', gia: 500000, soLuong: 2 },
    { id: 'SP003', ten: 'Chuot khong day', danhMuc: 'Phu Kien', gia: 300000, soLuong: 4 }, // Mua 4, đủ điều kiện KM
    { id: 'SP004', ten: 'Tai nghe Bluetooth', danhMuc: 'Dien Tu', gia: 1500000, soLuong: 1 }
];

const khachHang = {
    ten: 'Nguyen Thi B',
    loaiThanhVien: 'Vang'
};

function tinhTongTienGoc(gioHang) {

    return gioHang.map(function (product) {

        return product.gia * product.soLuong
    }).reduce((sanPham, sanPhamKe) => sanPham + sanPhamKe)
}

function tinhGiamGiaDanhMuc(danhMuc) {
    if (danhMuc === 'Dien Tu')
        return 0.1
    else if (danhMuc === 'Thoi Trang')
        return 0.15
    else
        return 0
}

function tinhGiamSoLuongSanPham(maSanPham, soLuong) {
    if (maSanPham === 'SP003' && soLuong >= 3) {
        return --soLuong
    }
    else return soLuong

}

function tinhGiamGiaThanhVien(soTien, loaiThanhVien) {
    if (loaiThanhVien === 'Vang') {
        return soTien * 0.1
    } else if (loaiThanhVien === 'Bac') {
        return soTien * 0.05
    }
    return soTien
}

function tinhGiamGiaSanPham(gioHang) {
    return gioHang.map(function (product) {

        return product.gia * tinhGiamGiaDanhMuc(product.danhMuc) * tinhGiamSoLuongSanPham(product.id, product.soLuong)
    }).reduce((sanPham, sanPhamKe) => sanPham + sanPhamKe)
}

function tinhTienThanhToan(gioHang, khachHang) {

    const tongTienGoc = tinhTongTienGoc(gioHang)
    console.log(tongTienGoc)
    const tongTienGiamGiaSanPham = tinhGiamGiaSanPham(gioHang)
    console.log(tongTienGiamGiaSanPham)
    const giamGiaThanhVien = tinhGiamGiaThanhVien(tongTienGoc - tongTienGiamGiaSanPham, khachHang.loaiThanhVien)


    return tongTienGoc - tongTienGiamGiaSanPham - giamGiaThanhVien

}

console.log(tinhTienThanhToan(gioHang, khachHang))
