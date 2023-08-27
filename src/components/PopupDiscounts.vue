
<template>
    <modal name="discount-list-modal">
        <h2>Danh sách mã giảm giá</h2>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.name }}</li>
        </ul>
    </modal>
</template>
  
<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Sản phẩm 1' },
                { id: 2, name: 'Sản phẩm 2' },
                { id: 3, name: 'Sản phẩm 3' },
                // Thêm danh sách sản phẩm khác
            ],
        };
    },
};
</script>
  