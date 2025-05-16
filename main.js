 // Datos de categorías
 const categories = [
    {
      name: "WiFi",
      image: "https://sony.scene7.com/is/image/sonyglobalsolutions/WF-C700N_Primary_1200x1200?$categorypdpnav$&fmt=png-alpha",
      class: "wifi"
    },
    {
      name: "Smartwatch",
      image: "https://static.vecteezy.com/system/resources/thumbnails/013/396/329/small_2x/smart-watch-realistic-3d-png.png",
      class: "smartwatch"
    },
    {
      name: "Devices",
      image: "https://download.logo.wine/logo/Sony_Energy_Devices_Corporation/Sony_Energy_Devices_Corporation-Logo.wine.png",
      class: "devices",
      subtitle: "Up to 20% off"
    },
    {
      name: "Gaming",
      image: "https://preview.redd.it/1z31z5y520r61.png?width=1080&crop=smart&auto=webp&s=caaebd75c5f7ad3269046fd53046df78d444e864",
      class: "gaming"
    },
    {
      name: "Accessories",
      image: "https://static.vecteezy.com/system/resources/previews/055/392/053/non_2x/black-gaming-mouse-with-rgb-lighting-isolated-on-transparent-background-free-png.png",
      class: "accessories"
    },
    {
      name: "Airpods",
      image: "https://static.vecteezy.com/system/resources/thumbnails/050/817/512/small_2x/white-apple-airpods-in-a-white-case-on-a-transparent-background-png.png",
      class: "airpods"
    }
  ];

  // Renderizado de categorías
  const categoriesContainer = document.getElementById("categories-container");

  categories.forEach(cat => {
    categoriesContainer.innerHTML += `
      <div class="category-card ${cat.class}">
        <div class="category-content">
          <h3>${cat.name}</h3>
          ${cat.subtitle ? `<h4>${cat.subtitle}</h4>` : ""}
          <button class="btn-small">Ver</button>
        </div>
        <div class="category-image">
          <img src="${cat.image}" alt="${cat.name}">
        </div>
      </div>
    `;
  });

  // Datos de características (features)
  const features = [
    {
      icon: "fas fa-truck",
      title: "Delivery sin costo",
      description: "En todos tus pedidos"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Compra asegurada",
      description: "Hasta 30 dias en plazo de devolución"
    },
    {
      icon: "fas fa-headset",
      title: "Soporte Enlinea",
      description: "24/7 solo por ti"
    },
    {
      icon: "fas fa-credit-card",
      title: "Paga Seguro",
      description: "Cualquier medio de pago"
    }
  ];

  // Renderizado de características
  const featuresContainer = document.getElementById("features-container");

  features.forEach(f => {
    featuresContainer.innerHTML += `
      <div class="feature">
        <div class="feature-icon">
          <i class="${f.icon}"></i>
        </div>
        <div class="feature-text">
          <h4>${f.title}</h4>
          <p>${f.description}</p>
        </div>
      </div>
    `;
  });

  // Datos de productos para el carousel
  const products = [
      {
          name: "Sony WH-1000XM4",
          price: "$299.99",
          rating: 5,
          image: "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-1000xm4_black_product_shot_1?$categorypdpnav$&fmt=png-alpha"
      },
      {
          name: "Apple AirPods Pro",
          price: "$249.99",
          rating: 4,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90"
      },
      {
          name: "Samsung Galaxy Watch 5",
          price: "$279.99",
          rating: 4,
          image: "https://images.samsung.com/is/image/samsung/p6pim/latin/2208/gallery/latin-galaxy-watch5-40mm-431107-sm-r900nzsaaro-533186936"
      },
      {
          name: "Bose QuietComfort Earbuds",
          price: "$199.99",
          rating: 4,
          image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/product_silo_images/qc_earbuds_black_EC_hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png"
      },
      {
          name: "Sony PlayStation 5",
          price: "$499.99",
          rating: 5,
          image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21"
      },
      {
          name: "Apple Watch Series 8",
          price: "$399.99",
          rating: 5,
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=1400&hei=1400"
      },
      {
          name: "Logitech G Pro X",
          price: "$129.99",
          rating: 4,
          image: "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-x/pro-headset-hero.png"
      },
      {
          name: "JBL Flip 6",
          price: "$129.99",
          rating: 4,
          image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw64735be8/JBL_Flip6_Hero_Black_29399_x3.png"
      }
  ];

  // Renderizado del carousel de productos
  const productCarousel = document.getElementById("product-carousel");
  const carouselDots = document.getElementById("carousel-dots");
  
  // Agregar productos al carousel
  products.forEach((product, index) => {
      productCarousel.innerHTML += `
          <div class="carousel-item" data-index="${index}">
              <div class="carousel-item-img">
                  <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="carousel-item-content">
                  <h3>${product.name}</h3>
                  <div class="price">${product.price}</div>
                  <div class="rating">
                      ${Array(product.rating).fill('<i class="fas fa-star"></i>').join('')}
                      ${Array(5 - product.rating).fill('<i class="far fa-star"></i>').join('')}
                  </div>
                  <button class="btn-small">Añadir al carrito</button>
              </div>
          </div>
      `;
      
      // Agregar dots para navegación
      carouselDots.innerHTML += `<div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
  });
  
  // Funcionalidad del carousel
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  let itemsPerView = 4; // Por defecto para pantallas grandes
  
  // Función para actualizar el número de items por vista según el ancho de la pantalla
  function updateItemsPerView() {
      if (window.innerWidth < 768) {
          itemsPerView = 1;
      } else if (window.innerWidth < 992) {
          itemsPerView = 2;
      } else if (window.innerWidth < 1200) {
          itemsPerView = 3;
      } else {
          itemsPerView = 4;
      }
      
      // Actualizar el carousel después de cambiar itemsPerView
      updateCarousel();
  }
  
  // Función para actualizar el carousel
  function updateCarousel() {
      const itemWidth = items[0].offsetWidth + 20; // Ancho del item + margen
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      
      // Actualizar dots activos
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
      });
  }
  
  // Event listeners para los botones de navegación
  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });
  
  nextBtn.addEventListener('click', () => {
      if (currentIndex < items.length - itemsPerView) {
          currentIndex++;
          updateCarousel();
      }
  });
  
  // Event listeners para los dots
  dots.forEach(dot => {
      dot.addEventListener('click', () => {
          currentIndex = parseInt(dot.dataset.index);
          updateCarousel();
      });
  });
  
  // Actualizar items por vista al cargar y al cambiar el tamaño de la ventana
  window.addEventListener('load', updateItemsPerView);
  window.addEventListener('resize', updateItemsPerView);
  
  // Auto-slide cada 5 segundos
  setInterval(() => {
      if (currentIndex < items.length - itemsPerView) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateCarousel();
  }, 5000);