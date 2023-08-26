<template>
<div class="container">
  <div class="main-container">
    <div class="book-ticket">
      <h1>Booking Page</h1>
      <div class="dropdown-container" style="text-align: left;">
        <div class="horizontal-dropdown">
          <label class="dropdown-label" for="serviceDropdown">Chọn dịch vụ:</label> <br><br>
          <select class="service-dropdown" id="serviceDropdown">
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
            <!-- Add more options as needed -->
          </select>
        </div>
        <div class="horizontal-dropdown">
          <label class="dropdown-label" for="timeDropdown">Chọn giờ sử dụng:</label> <br><br>
          <select class="time-dropdown" id="timeDropdown">
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
            <option value="120">120 minutes</option>
          </select>
        </div>
      </div>
      <form style="text-align: left;">
        <label class="radio-label">Chọn dịch vụ khác</label> <br> <br>
        <label class="radio">
          <input type="radio" name="transport" value="no_transport" checked>
          Không đưa đón (0 VND)
        </label>
        <label class="radio">
          <input type="radio" name="transport" value="airport_transport">
          Có đưa đón sân bay (10 VND)
        </label>
      </form>
      <div class="ticket-quantity" style="text-align: left;">
        <label class="quantity-label" for="ticketQuantity">Số lượng vé:</label> <br> <br>
        <div class="quantity-controls">
          <button @click="decreaseQuantity" class="decrease-button">-</button>
          <input type="number" id="ticketQuantity" v-model="quantity" min="1" @input="updatePrice">
          <button class="increase-button" @click="increaseQuantity">+</button>
        </div>
        <p class="price">Giá vé: {{ quantity * 100000 }} VND</p>
      </div>
    </div>
    
    <div class="info-ticket">
      <h1>Thông tin đặt vé</h1>
      <div class="name-phone">
        <div style="text-align: left;" class="input-field">
          <label for="fullName">Họ và tên</label> <br> <br>
          <input type="text" id="fullName">
        </div>
        <div style="text-align: left;" class="input-field">
          <label for="phoneNumber">Số điện thoại</label> <br> <br>
          <input type="tel" id="phoneNumber">
        </div>
      </div>  
      <div class="visa-kakatawl">
        <div style="text-align: left;" class="input-field">
          <label for="visa">Visa</label> <br> <br>
          <input type="text" id="visa">
        </div>
        <div style="text-align: left;" class="input-field">
          <label for="kakatawl">Kakatawl</label> <br> <br>
          <input type="text" id="kakatawl">
        </div>
      </div>  
      <div style="text-align: left;" class="input-field2">
        <label for="note">Ghi chú</label> <br> <br>
        <textarea id="note"></textarea>
      </div>
    </div>
    <div class="discount-code">
       <div class="MuiBox-root jss244 jss228 snipcss0-0-0-1 snipcss-B5IrL">
  <div class="MuiBox-root jss245 jss229 snipcss0-1-1-2">
    <svg width="36" height="34" fill="none" style="margin-right:12px" class="snipcss0-2-2-3">
      <g filter="url(#icon_promo_code_svg__filter0_d)" class="snipcss0-3-3-4">
        <path d="M30.25 6H13.625a.881.881 0 00-.62.255l-1.13 1.133-1.13-1.133a.881.881 0 00-.62-.255H5.75C4.786 6 4 6.786 4 7.75V23.5c0 .966.786 1.75 1.75 1.75h4.375a.882.882 0 00.62-.256l1.13-1.132 1.13 1.13a.876.876 0 00.62.258H30.25A1.75 1.75 0 0032 23.5V7.75C32 6.786 31.216 6 30.25 6z" fill="url(#icon_promo_code_svg__paint0_linear)">
        </path>
        <path d="M18.875 14.75a2.628 2.628 0 01-2.625-2.625A2.628 2.628 0 0118.875 9.5a2.628 2.628 0 012.625 2.625 2.628 2.628 0 01-2.625 2.625zm0-3.5a.875.875 0 100 1.75.875.875 0 000-1.75zM24.125 21.75a2.628 2.628 0 01-2.625-2.625 2.628 2.628 0 012.625-2.625 2.628 2.628 0 012.625 2.625 2.628 2.628 0 01-2.625 2.625zm0-3.5a.878.878 0 00-.875.875c0 .481.394.875.875.875a.878.878 0 00.875-.875.878.878 0 00-.875-.875zM17.125 21.75a.875.875 0 01-.672-1.435l8.75-10.5a.876.876 0 011.232-.112c.37.31.42.861.11 1.234l-8.75 10.5a.875.875 0 01-.67.313zM12.75 9.5H11v1.75h1.75V9.5zM12.75 20H11v1.75h1.75V20zM12.75 16.5H11v1.75h1.75V16.5zM12.75 13H11v1.75h1.75V13z" fill="#fff">
        </path>
      </g>
      <defs class="snipcss0-3-3-5">
        <linearGradient id="icon_promo_code_svg__paint0_linear" x1="18" y1="6" x2="18" y2="25.25" gradientUnits="userSpaceOnUse" class="snipcss0-4-5-6">
          <stop stop-color="#5BD68E" class="snipcss0-5-6-7">
          </stop>
          <stop offset="1" stop-color="#48BB78" class="snipcss0-5-6-8">
          </stop>
        </linearGradient>
        <filter id="icon_promo_code_svg__filter0_d" x="-2" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" class="snipcss0-4-5-9">
          <feFlood flood-opacity="0" result="BackgroundImageFix" class="snipcss0-5-9-10">
          </feFlood>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" class="snipcss0-5-9-11">
          </feColorMatrix>
          <feOffset dy="4" class="snipcss0-5-9-12">
          </feOffset>
          <feGaussianBlur stdDeviation="2" class="snipcss0-5-9-13">
          </feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.305882 0 0 0 0 0.764706 0 0 0 0 0.501961 0 0 0 0.15 0" class="snipcss0-5-9-14">
          </feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" class="snipcss0-5-9-15">
          </feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" class="snipcss0-5-9-16">
          </feBlend>
        </filter>
      </defs>
    </svg>
    <div class="MuiBox-root jss246 jss240 snipcss0-2-2-17">
      Mã giảm giá
    </div>
  </div>
  <div class="MuiBox-root jss247 jss230 snipcss0-1-1-18">
    <div class="MuiBox-root jss248 jss234 snipcss0-2-18-19">
      <div class="MuiBox-root jss249 snipcss0-3-19-32">
        <div class="MuiBox-root jss701">
          <svg viewBox="0 0 20 20" fill="none" class="svgFillAll jss233" @click="togglePopup">
            <path d="M10 18.75a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5z" fill="#00B6F3" stroke="#00B6F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M10 5v10M5 10h10" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
            </path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
    <div class="popup" v-if="isPopupOpen">
    <span class="close" @click="closePopup">&times;</span>
      <div class="MuiBox-root jss606 jss595 snipcss-cZ7m5">
  <div class="MuiBox-root jss607 jss594">
    <p class="MuiTypography-root jss593 MuiTypography-body1">
      Hoặc chọn một mã giảm giá dưới đây
      <span class="MuiTypography-root MuiTypography-body1 style-PfmTT" id="style-PfmTT">
        (1 mã)
      </span>
    </p>
  </div>
  <div class="MuiBox-root jss608 jss596">
    <div class="MuiBox-root jss609 jss584">
      <div class="MuiGrid-root jss589 MuiGrid-container">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9 MuiGrid-grid-sm-9 MuiGrid-grid-md-9 MuiGrid-grid-lg-9">
          <div class="MuiBox-root jss610 voucherSelected jss580">
            <h6 class="MuiTypography-root jss588 MuiTypography-subtitle2">
              CUOIHE
            </h6>
            <h6 class="MuiTypography-root MuiTypography-subtitle1">
              CUỐI HÈ SALE ĐẬM - KHÁCH SẠN GIẢM ĐẾN 200K
            </h6>
            <p class="MuiTypography-root jss587 MuiTypography-body2">
              Hạn sử dụng: 31/08/2023
            </p>
            <span class="MuiBox-root jss611 jss597">
              Điều kiện &amp; thể lệ
            </span>
          </div>
        </div>
        <div class="MuiGrid-root jss583 MuiGrid-item MuiGrid-grid-xs-3 MuiGrid-grid-sm-3 MuiGrid-grid-md-3 MuiGrid-grid-lg-3">
          <div class="MuiBox-root jss612 circle jss582 jss598">
          </div>
          <div class="MuiBox-root jss613 voucherUsed jss581">
            <h6 class="MuiTypography-root MuiTypography-subtitle2 style-JHEaW" id="style-JHEaW">
              Sử dụng
            </h6>
          </div>
          <div class="MuiBox-root jss614 circle jss582 jss598">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    </div> 
   </div> 
  
  <div class="additional-container">
    <h1>Chi tiết dịch vụ</h1>
    <h2>Chính Sách:</h2> <br>
    <p>Miễn phí sử dụng tour xe điện tham quan chứng tích Pháp cổ (1 lần duy nhất theo thời gian từ 8:00- 11:00 trong 30 phút)
       Miễn phí sử dụng 1 giờ thuê xe đạp cho mỗi khách (dựa theo tình trạng trống)
       Ưu đãi trăng mật khi đặt từ 3 đêm trở lên (Trăng mật phải được đề cập trong đơn đặt phòng): tặng Bánh kem trăng mật & Miễn phí nâng hạng lên loại phòng cao hơn kế tiếp
       Giá áp dụng khách Việt Nam
       Độc quyền mytour : Giảm giá 50% dịch vụ xe  đưa đón từ bất kì địa điểm quý khách mong muốn. Đặt trước 24h ngày check in
       Apply guest from Vietnam
       MIỄN PHÍ PHỤ THU TRẺ EM (Miễn phí phụ thu tối đa 2 trẻ dưới 10 tuổi mỗi phòng khi ngủ chung với bố mẹ)
       Kid for free (remove surcharge for maximum 2 kids under 10 years old/room sharing the bed with pa</p>
    <h1>Thông tin chi tiết vé</h1>
    <p>Miễn phí sử dụng tour xe điện tham quan chứng tích Pháp cổ (1 lần duy nhất theo thời gian từ 8:00- 11:00 trong 30 phút)
       Miễn phí sử dụng 1 giờ thuê xe đạp cho mỗi khách (dựa theo tình trạng trống)
       Ưu đãi trăng mật khi đặt từ 3 đêm trở lên (Trăng mật phải được đề cập trong đơn đặt phòng): tặng Bánh kem trăng mật & Miễn phí nâng hạng lên loại phòng cao hơn kế tiếp
       Giá áp dụng khách Việt Nam
       Độc quyền mytour : Giảm giá 50% dịch vụ xe  đưa đón từ bất kì địa điểm quý khách mong muốn. Đặt trước 24h ngày check in
       Apply guest from Vietnam
       MIỄN PHÍ PHỤ THU TRẺ EM (Miễn phí phụ thu tối đa 2 trẻ dưới 10 tuổi mỗi phòng khi ngủ chung với bố mẹ)
       Kid for free (remove surcharge for maximum 2 kids under 10 years old/room sharing the bed with pa</p>
  </div>
</div>    
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
      isPopupOpen: false
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
      this.updatePrice();
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
        this.updatePrice();
      }
    },
    updatePrice() {
      this.price = this.quantity * 100000;
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen; // Đảo ngược trạng thái hiển thị popup
    }
  }
}

</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  margin-right: 20px;
}

.main-content {
  display: flex;
  flex-direction: column;
}

.book-ticket,
.info-ticket,
.additional-container,
.discount-code {
  border: 1px solid #E9F0F0;
  background-color: #F7FAFA;
  padding: 20px;
  flex: 1;
  border-radius: 10px;
  margin-top: 20px;
}

.dropdown-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.horizontal-dropdown {
  margin-right: 20px;
}

.input-field {
  margin-right: 20px;
}

.dropdown-label {
  margin-bottom: 50px;
  font-size: 20px;
  margin-right: 0px;
}

.service-dropdown,
.time-dropdown {
  width: 350px;
  height: 40px;
  font-size: 16px;
  background-color: white;
  border: 1px solid #E9F0F0;
  border-radius: 5px;
  outline: none;
  box-shadow: none;
}

.radio-label {
  margin-bottom: 5px;
  font-size: 20px;
  margin-left: 5px;
}

.radio {
  margin-bottom: 5px;
  font-size: 15px;
  margin-right: 0px;
}

.quantity-label {
  margin-bottom: 5px;
  font-size: 20px;
  margin-left: 5px;
}

.ticket-quantity {
  margin-top: 20px;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls button {
  background-color: #E9F0F0;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

.quantity-controls input {
  width: 40px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #E9F0F0;
  border-radius: 5px;
}

.input-field {
  margin-bottom: 10px;
}

.input-field label {
  font-size: 16px;
  margin-right: 5px;
}

.input-field input,
.input-field textarea {
  width: 350px;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #E9F0F0;
  border-radius: 5px;
  outline: none;
}

.input-field2 {
  margin-bottom: 10px;
}

.input-field2 label {
  font-size: 16px;
  margin-right: 5px;
}

.input-field2 input,
.input-field2 textarea {
  width: 700px;
  height: 90px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #E9F0F0;
  border-radius: 5px;
  outline: none;
}

.name-phone{
   display: flex;
  align-items: flex-start;
}

.visa-kakatawl{
   display: flex;
  align-items: flex-start;
}

.main-container{
  width: calc(50% + 160px);
}

  .discount-code {
    height: 50px; /* Đặt chiều cao mong muốn */
    overflow: hidden; /* Ẩn phần vượt quá chiều cao */
    display: flex;
    align-items: center; /* Căn giữa theo chiều dọc */
  }

.additional-container {
  margin-left: 20px;
}
.additional-container {
    text-align: left; /* Căn chữ 'Chính Sách' sang trái */
  }
  
  .additional-container p {
    text-indent: 0; /* Đặt lề đầu dòng của thẻ <p> về 0 */
    margin: 0; /* Đặt lề thụt đầu dòng và khoảng cách giữa các đoạn văn bản về 0 */
    font-size: 1.1em;
    font-family: "Helvetica", sans-serif;
  }

@font-face { 
  font-family:Mt;
  src:url(https://mytour.vn/fonts/Mt/Mt-Regular.otf);
  font-display:swap;
} 
  body {  
    background:white;
    color:#1A202C;
    font-family:Mt,-apple-system,BlinkMacSystemFont,sans-serif;
    font-size:12px;
    font-weight:normal;
    line-height:14px;
  }  
* { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
} 

* { 
    box-sizing: inherit;
} 

body { 
    padding: 0; 
    margin: 0; 
    font-family: Mt,-apple-system,BlinkMacSystemFont,sans-serif;
} 

body { 
    color: rgba(0, 0, 0, 0.87); 
    margin: 0; 
    font-size: 12px; 
    font-family: Mt; 
    font-weight: normal; 
    line-height: 14px; 
    background-color: #fff;
} 

html { 
    padding: 0; 
    margin: 0; 
    font-family: Mt,-apple-system,BlinkMacSystemFont,sans-serif;
} 

html { 
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
} 

.jss228 { 
    display: flex; 
    font-size: 18px; 
    align-items: center; 
    font-weight: 600; 
    line-height: 21px; 
    margin-bottom: 10px; 
    justify-content: space-between;
} 

*,:before,:after { 
    box-sizing: inherit;
} 

:-webkit-scrollbar { 
    width: 8px; 
    height: 10px;
} 

:-webkit-scrollbar { 
    height: 5px; 
    width: 5px;
} 

:-webkit-scrollbar-thumb { 
    border-radius: 10px; 
    background: #a0a0a0;
} 

:-webkit-scrollbar-thumb { 
    background: #bdbdbd; 
    border-radius: 8px;
} 

:-webkit-scrollbar-track { 
    background: #e0e0e0;
} 

.jss229 { 
    display: flex; 
    padding: 18px 0 19px 16px; 
    align-items: center;
} 

.jss230 { 
    position: relative;
} 

svg { 
    display: block;
} 

.jss240 { 
    display: flex; 
    flex-direction: column;
} 

.jss234 { 
    display: flex; 
    align-items: center;
} 

.jss233 { 
    fill: #FF3366; 
    width: 20px; 
    cursor: pointer; 
    height: 20px; 
    margin: 0 34px; 
    stroke: #ffffff;
} 


 .discount-code {
  height: 50px; /* Đặt chiều cao mong muốn */
  overflow: hidden; /* Ẩn phần vượt quá chiều cao */
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc */
  cursor: pointer; /* Biểu tượng con trỏ khi di chuột qua */
}

.popup {
  display: none; /* Ẩn popup mặc định */
  position: absolute;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  z-index: 1;
}

.discount-code:hover .popup {
  display: block; /* Hiển thị popup khi di chuột qua thẻ discount-code */
}

  body {  
    background:#ffffff;
    font-family:Mt,-apple-system,BlinkMacSystemFont,sans-serif;
    color:rgba(0, 0, 0, 0.87);
    font-size:12px;
    font-weight:normal;
    line-height:14px;
  }  
* { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
} 

* { 
    box-sizing: inherit;
} 

body { 
    padding: 0; 
    margin: 0; 
    font-family: Mt,-apple-system,BlinkMacSystemFont,sans-serif;
} 

body { 
    color: rgba(0, 0, 0, 0.87); 
    margin: 0; 
    font-size: 12px; 
    font-family: Mt; 
    font-weight: normal; 
    line-height: 14px; 
    background-color: #fff;
} 

html { 
    padding: 0; 
    margin: 0; 
    font-family: Mt,-apple-system,BlinkMacSystemFont,sans-serif;
} 

html { 
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
} 

.jss595 { 
    height: 100%;
} 

*,:before,:after { 
    box-sizing: inherit;
} 

:-webkit-scrollbar { 
    width: 8px; 
    height: 10px;
} 

:-webkit-scrollbar { 
    height: 5px; 
    width: 5px;
} 

:-webkit-scrollbar-thumb { 
    border-radius: 10px; 
    background: #a0a0a0;
} 

:-webkit-scrollbar-thumb { 
    background: #bdbdbd; 
    border-radius: 8px;
} 

:-webkit-scrollbar-track { 
    background: #e0e0e0;
} 

.jss596 { 
    height: 354px; 
    overflow: auto;
} 

.MuiTypography-root { 
    margin: 0;
} 

.MuiTypography-body1 { 
    font-size: 16px; 
    font-family: Mt; 
    font-weight: normal; 
    line-height: 20px;
} 

.jss593 { 
    margin: 16px 16px; 
    font-size: 14px; 
    font-weight: 600; 
    line-height: 17px;
} 

.jss584 { 
    margin: 16px 0; 
    display: flex; 
    border-radius: 8px; 
    flex-direction: row;
} 

.MuiGrid-container { 
    width: 100%; 
    display: flex; 
    flex-wrap: wrap; 
    box-sizing: border-box;
} 

.jss589 { 
    margin: 0 16px; 
    overflow: hidden; 
    box-shadow: 0px 0px 6px rgb(0 0 0 / 6%), 0px 6px 6px rgb(0 0 0 / 6%); 
    border-radius: 8px;
} 

.MuiGrid-item { 
    margin: 0; 
    box-sizing: border-box;
} 

.MuiGrid-grid-xs-9 { 
    flex-grow: 0; 
    max-width: 75%; 
    flex-basis: 75%;
} 

@media (min-width: 768px){ 
  .MuiGrid-grid-sm-9 { 
    flex-grow: 0; 
    max-width: 75%; 
    flex-basis: 75%;
  } 
}     

@media (min-width: 992px){ 
  .MuiGrid-grid-md-9 { 
    flex-grow: 0; 
    max-width: 75%; 
    flex-basis: 75%;
  } 
}     

@media (min-width: 1180px){ 
  .MuiGrid-grid-lg-9 { 
    flex-grow: 0; 
    max-width: 75%; 
    flex-basis: 75%;
  } 
}     

.MuiGrid-grid-xs-3 { 
    flex-grow: 0; 
    max-width: 25%; 
    flex-basis: 25%;
} 

@media (min-width: 768px){ 
  .MuiGrid-grid-sm-3 { 
    flex-grow: 0; 
    max-width: 25%; 
    flex-basis: 25%;
  } 
}     

@media (min-width: 992px){ 
  .MuiGrid-grid-md-3 { 
    flex-grow: 0; 
    max-width: 25%; 
    flex-basis: 25%;
  } 
}     

@media (min-width: 1180px){ 
  .MuiGrid-grid-lg-3 { 
    flex-grow: 0; 
    max-width: 25%; 
    flex-basis: 25%;
  } 
}     

.jss583 { 
    position: relative;
} 

.jss580 { 
    display: flex; 
    padding: 12px; 
    background: #ffffff; 
    border-top: solid 1px #EDF2F7; 
    border-left: solid 5px #00B6F3; 
    border-bottom: solid 1px #EDF2F7; 
    border-radius: 8px; 
    flex-direction: column;
} 

.jss612 { 
    top: -11px;
} 

.jss598 { 
    left: -10px; 
    width: 21px; 
    height: 21px; 
    position: absolute; 
    border-radius: 50%; 
    background-color: rgb(237, 242, 247);
} 

.jss589 .circle  { 
    border: solid 1px #EDF2F7; 
    background: #ffffff;
} 

.jss581 { 
    color: #00B6F3; 
    height: 100%; 
    display: flex; 
    background: #ffffff; 
    align-items: center; 
    border-left: 1px dashed #cbd5e0; 
    border-radius: 8px; 
    flex-direction: column; 
    justify-content: center;
} 

.jss614 { 
    top: 90%;
} 

.MuiTypography-subtitle2 { 
    font-size: 14px; 
    font-family: Mt; 
    font-weight: 600; 
    line-height: 16px;
} 

.jss588 { 
    color: #718096; 
    padding-bottom: 6px; 
    text-transform: uppercase;
} 

.MuiTypography-subtitle1 { 
    font-size: 16px; 
    font-family: Mt; 
    font-weight: 600; 
    line-height: 20px;
} 

.MuiTypography-body2 { 
    font-size: 12px; 
    font-family: Mt; 
    font-weight: normal; 
    line-height: 14px;
} 

.jss587 { 
    color: #718096; 
    font-size: 12px; 
    font-weight: 400; 
    line-height: 14px; 
    padding-top: 8px;
} 

.jss597 { 
    color: #FF3366; 
    cursor: pointer; 
    font-size: 12px; 
    margin-top: 6px; 
    line-height: 14px;
} 


/* These were inline style tags. Uses id+class to override almost everything */
#style-PfmTT.style-PfmTT {  
   font-size: 14px;  
    padding-left: 2px;  
}  
#style-JHEaW.style-JHEaW {  
   cursor: pointer;  
}  

</style>