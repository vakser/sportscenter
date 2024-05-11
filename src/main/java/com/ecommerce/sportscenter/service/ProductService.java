package com.ecommerce.sportscenter.service;

import com.ecommerce.sportscenter.model.ProductResponse;

import java.util.List;

public interface ProductService {
    ProductResponse getProductById(Integer productId);
    List<ProductResponse> getProducts();
//    List<ProductResponse> searchProductsByName(String keyword);
//    List<ProductResponse> searchProductsByBrand(Integer brandId);
//    List<ProductResponse> searchProductsByType(Integer typeId);
//    List<ProductResponse> searchProductsByBrandAndType(Integer brandId, Integer typeId);
//    List<ProductResponse> searchProductsByBrandTypeAndName(Integer brandId, Integer typeId, String keyword);
}
