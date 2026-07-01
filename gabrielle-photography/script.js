// ========================================
// 照片数据 — 添加/修改照片只编辑这里
// ========================================
// 格式: { img: "文件名", country: "国家ID", city: "城市ID", location: "地点·时间", desc: "描述" }
// 新照片放进 photos 文件夹，然后在这里加一行

var photos = [
  // === 大连 ===
  { img: "1695464.JPG", country: "china", city: "dalian", location: "星海公园海滩 · 2022年冬", desc: "星海公园是我在这个城市最喜欢的地方，能在这里看到本地居民最自然的生活状态：钓鱼、赶海、散步、游泳...这年冬天是大四的最后一个学期，那天非常冷，冷到相机电池都支撑不过1个小时。" },
  { img: "1695457.JPG", country: "china", city: "dalian", location: "星海公园码头 · 2022年冬", desc: "大连的冬天其实相比东北其他城市还算温和，但是也依旧冷的刺骨。冬天海边的晚霞颇为宁静，家家户户都在猫冬，偶尔有人到海边走走，我记得那天为了拍晚霞我帽子围巾手套口罩一个没少，依然冻的手指僵硬不能屈伸。" },
  { img: "1695458.JPG", country: "china", city: "dalian", location: "星海跨海大桥 · 2022年冬", desc: "其实我拍了很多次星海大桥的照片，但是这一次是我最满意的，无论是从色彩还是结构或者氛围。" },
  { img: "1695465.JPG", country: "china", city: "dalian", location: "星海公园 · 2022年冬", desc: "大爷提着桶多半是在海滩上捡些海货，不过到底有什么丰收很难说，毕竟我没好意思过去问。" },
  { img: "1727959.JPG", country: "china", city: "dalian", location: "宿舍走廊 · 2023年", desc: "这时离退宿已经没多久了，宿舍里的人也越来越少，难得有这么空旷的楼道可以拍摄，当时我就在想，我得赶紧拍两张留个纪念，以后可没机会了，恰好窗外的阳光一点点渗透进楼道，我很是迷恋建筑结构形成的纵深感。" },

  // === 贵阳 ===
  { img: "1696063.JPG", country: "china", city: "guiyang", location: "河滨公园 · 2023年冬", desc: "这好像是我长大后第一次在贵阳坐摩天轮，小时候爷爷奶奶似乎也带我坐过，但是时间久远，记忆模糊。再说贵阳的冬很难得遇到晴空万里的日子，这张照片很长时间以来都是我的朋友圈背景。" },

  // === 英国 - 杜伦 ===
  { img: "IMG_4503.JPG", country: "uk", city: "durham", location: "杜伦大教堂 · 2024年秋", desc: "刚到英国的第二个月，东北部就已经冻的不行，教堂的灯光在深秋的夜里也显得格外庄重。参加完开学典礼之后第一次来认真的欣赏和观察这座恢弘的哥特式教堂的内部。" },
  { img: "_DSC0959.JPG", country: "uk", city: "durham", location: "杜伦大教堂 · 2025年春", desc: "大教堂后来成为了我在杜伦最喜欢的地方，喜欢它的庄严与宁静。周日去会碰到弥撒或者别的活动，我喜欢捕捉那些虔诚的瞬间，无论是单纯来欣赏建筑的游客，还是来虔诚祝祷的信徒。" },
  { img: "_DSC0729.JPG", country: "uk", city: "durham", location: "杜伦EP公寓后山 · 2025年初", desc: "这片空地具体叫什么我已经不太记得了，但我时常会一个人来走走。英国的冬令时白天很短，往往下午四点多天就黑了，得赶在太阳落山之前跑到这来，这也是我在杜伦拍到的最美的一次晚霞。我记得我一个人靠在篱笆上，一个老大爷走过来问我是不是迷路了，可能他也没想到天寒地冻的会有人来这特地看晚霞。" },

  // === 英国 - 约克 ===
  { img: "acf9b3dcarf8aab20bc60dc4ec8a600f.jpg", country: "uk", city: "york", location: "约克街道 · 2024年", desc: "那天的约克正逢阴天，光照实属不尽如人意，索性就全换成了黑白色调。出人意料的效果还不错。后面还拍到了他在街头演奏的照片，我也非常喜欢。" },

  // === 英国 - St.Abbs ===
  { img: "_DSC0834.JPG", country: "uk", city: "stabbs", location: "St.Abbs · 2025年春", desc: "St.Abbs，位于苏格兰的东北海岸，承载了我在英国的第一次徒步体验。从Berwick-upon-tweed的镇上要坐一个小时公交车才能到，这张照片是我和朋友刚下公交走过路口，恰好转头看到海在小路的尽头。" },

  // === 英国 - 爱丁堡 ===
  { img: "4102cb6c1iad70a4d8c92f82bb9c8a59.jpg", country: "uk", city: "edinburgh", location: "爱丁堡 · 2024年冬", desc: "爱丁堡的建筑总有一种阴郁，尤其是在阴雨天总觉得这个城市带着一种神秘的怨念。但我是一个运气很好的人，几乎每一次造访迎接我的都是大晴天，哪怕是在湿冷大风的冬天。" },

  // === 西班牙 - 巴塞罗那 ===
  { img: "_DSC0986.jpg", country: "spain", city: "barcelona", location: "巴塞罗那 · 巴特罗之家 · 2025年春", desc: "巴特罗之家里我最喜欢的是那些充满想象力的灯饰和线条，龟背图案的顶灯是一进建筑看到的第一个设计，灯光柔和、平静，搭配着脚下的旋转楼梯缓缓把身体送上楼去。" },
  { img: "_DSC1027.JPG", country: "spain", city: "barcelona", location: "巴塞罗那 · 巴特罗之家 · 2025年春", desc: "这是巴特罗之家的顶楼，整个顶部的墙面都是毛茸茸的质感，光从窗台上落下来，朦胧的像梦境一样。" },

  // === 其他 ===
  { img: "1792818.JPG", country: "other", city: "misc", location: "古寺 · 2024年春", desc: "红墙等了一整年，就等这几朵梅花。" }
];

// ========================================
// 国家信息
// ========================================
var countries = {
  china:  { name: "中国",   en: "China",          desc: "" },
  uk:     { name: "英国",   en: "United Kingdom", desc: "我在这里度过了人生中极其动荡的一年，完成了硕士学业，经历了完整的，从破裂到重建整个生活的过程" },
  spain:  { name: "西班牙", en: "España",         desc: "" },
  italy:  { name: "意大利", en: "Italia",         desc: "尚未上传" },
  france: { name: "法国",   en: "France",         desc: "尚未上传" },
  other:  { name: "其他",   en: "Elsewhere",      desc: "" }
};

// ========================================
// 城市信息
// ========================================
var cities = {
  dalian:     { name: "大连",                en: "Dalian",    country: "china", desc: "我本科四年所在的城市，也是真正意义上我摄影的起始地，是我离家之后第一个长居的城市，是我成年之后的第一个记忆方阵。" },
  guiyang:    { name: "贵阳",                en: "Guiyang",   country: "china", desc: "我的家乡，我回不去也离不开的家乡" },
  suzhou:     { name: "苏州",                en: "Suzhou",    country: "china", desc: "" },
  durham:     { name: "Durham",         en: "Durham",    country: "uk",    desc: "" },
  york:       { name: "York",           en: "York",      country: "uk",    desc: "" },
  edinburgh:  { name: "Edinburgh",    en: "Edinburgh", country: "uk",    desc: "" },
  stabbs:     { name: "St.Abbs",             en: "St.Abbs",   country: "uk",    desc: "" },
  barcelona:  { name: "Barcelona",  en: "Barcelona", country: "spain", desc: "" },
  misc:       { name: "",                    en: "",          country: "other", desc: "" }
};

// ========================================
// 地图坐标
// ========================================
var mapLocations = [
  { name: "大连",                lat: 38.914, lng: 121.614, page: "dalian" },
  { name: "贵阳",                lat: 26.647, lng: 106.630, page: "guiyang" },
  { name: "Durham",         lat: 54.776, lng: -1.574,  page: "durham" },
  { name: "York",           lat: 53.959, lng: -1.086,  page: "york" },
  { name: "Edinburgh",    lat: 55.953, lng: -3.188,  page: "edinburgh" },
  { name: "St.Abbs",             lat: 55.910, lng: -2.092,  page: "stabbs" },
  { name: "Barcelona",  lat: 41.385, lng: 2.173,   page: "barcelona" }
];

// ========================================
// 页面切换
// ========================================
var previousPage = 'home'; // 记住从哪里跳来的

function showPage(pageId) {
  var home = document.getElementById('home');
  var pages = document.querySelectorAll('.page');

  // 如果当前有激活的页面，记住它（地图页除外，不作为返回目标）
  var currentActive = null;
  pages.forEach(function(p) {
    if (p.classList.contains('active')) currentActive = p.id;
  });
  if (!home.classList.contains('hidden') && !currentActive) {
    currentActive = 'home';
  }
  if (currentActive && currentActive !== pageId) {
    previousPage = currentActive;
  }

  home.classList.add('hidden');
  pages.forEach(function(p) { p.classList.remove('active'); });

  if (pageId === 'home') {
    home.classList.remove('hidden');
  } else {
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'mapPage') {
      setTimeout(initMap, 100);
    }
  }

  window.scrollTo(0, 0);
}

// ========================================
// 大图浮层
// ========================================
function openPhoto(imgSrc, location, desc) {
  document.getElementById('overlayImg').src = imgSrc;
  document.getElementById('overlayLoc').textContent = location;
  document.getElementById('overlayDesc').textContent = desc;
  document.getElementById('photoOverlay').style.display = 'flex';
}

function closePhoto() {
  document.getElementById('photoOverlay').style.display = 'none';
}

// ========================================
// 生成照片墙（堆叠式）
// ========================================
function buildPhotoWall(container, photoList) {
  photoList.forEach(function(photo) {
    var div = document.createElement('div');
    div.className = 'wall-item';
    div.onclick = function() {
      openPhoto('photos/' + photo.img, photo.location, photo.desc);
    };

    var img = document.createElement('img');
    img.src = 'photos/' + photo.img;
    img.alt = photo.desc.substring(0, 20);

    var rotate = (Math.random() - 0.5) * 16;
    var offsetX = (Math.random() - 0.5) * 20;
    var offsetY = (Math.random() - 0.5) * 20;
    div.style.transform = 'rotate(' + rotate + 'deg) translate(' + offsetX + 'px, ' + offsetY + 'px)';

    div.appendChild(img);
    container.appendChild(div);
  });
}

// ========================================
// 生成国家页面
// ========================================
function buildCountryPage(countryId) {
  var country = countries[countryId];
  var countryPhotos = photos.filter(function(p) { return p.country === countryId; });

  // 找出有照片的城市
  var cityIds = [];
  countryPhotos.forEach(function(p) {
    if (cityIds.indexOf(p.city) === -1) { cityIds.push(p.city); }
  });

  var section = document.createElement('section');
  section.id = countryId;
  section.className = 'page';

  // 顶部
  var header = document.createElement('div');
  header.className = 'page-header';

  var back = document.createElement('a');
  back.href = '#';
  back.className = 'back';
  back.textContent = '← 返回';
  back.onclick = function(e) { e.preventDefault(); showPage('home'); };
  header.appendChild(back);

  var h2 = document.createElement('h2');
  h2.textContent = country.name;
  header.appendChild(h2);

  var en = document.createElement('p');
  en.className = 'section-en';
  en.textContent = country.en;
  header.appendChild(en);

  if (country.desc) {
    var desc = document.createElement('p');
    desc.className = 'section-desc';
    desc.textContent = country.desc;
    header.appendChild(desc);
  }

  // 城市子导航
  if (cityIds.length > 0) {
    var nav = document.createElement('div');
    nav.className = 'city-nav';
    cityIds.forEach(function(cityId) {
      var city = cities[cityId];
      if (city.name) {
        var a = document.createElement('a');
        a.href = '#';
        a.textContent = city.name;
        a.onclick = function(e) { e.preventDefault(); showPage(cityId); };
        nav.appendChild(a);
      }
    });
    header.appendChild(nav);
  }

  section.appendChild(header);

  // 照片墙
  if (countryPhotos.length > 0) {
    var wall = document.createElement('div');
    wall.className = 'photo-wall';
    section.appendChild(wall);
    buildPhotoWall(wall, countryPhotos);
  } else {
    var empty = document.createElement('p');
    empty.className = 'section-desc';
    empty.textContent = '尚未上传';
    section.appendChild(empty);
  }

  return section;
}

// ========================================
// 生成城市页面
// ========================================
function buildCityPage(cityId) {
  var city = cities[cityId];
  if (!city.name) return null;

  var cityPhotos = photos.filter(function(p) { return p.city === cityId; });

  var section = document.createElement('section');
  section.id = cityId;
  section.className = 'page';

  // 顶部
  var header = document.createElement('div');
  header.className = 'page-header';

  var back = document.createElement('a');
  back.href = '#';
  back.className = 'back';
  back.textContent = '← 返回';
  back.onclick = function(e) { e.preventDefault(); showPage(previousPage); };
  header.appendChild(back);

  var h2 = document.createElement('h2');
  h2.textContent = city.name;
  header.appendChild(h2);

  var en = document.createElement('p');
  en.className = 'section-en';
  en.textContent = city.en;
  header.appendChild(en);

  if (city.desc) {
    var desc = document.createElement('p');
    desc.className = 'section-desc';
    desc.textContent = city.desc;
    header.appendChild(desc);
  }

  section.appendChild(header);

  // 照片列表
  if (cityPhotos.length > 0) {
    cityPhotos.forEach(function(photo) {
      var photoDiv = document.createElement('div');
      photoDiv.className = 'photo';
      photoDiv.onclick = function() {
        openPhoto('photos/' + photo.img, photo.location, photo.desc);
      };

      var img = document.createElement('img');
      img.src = 'photos/' + photo.img;
      img.alt = photo.location;
      photoDiv.appendChild(img);

      var info = document.createElement('div');
      info.className = 'photo-info';

      var loc = document.createElement('p');
      loc.className = 'photo-location';
      loc.textContent = photo.location;
      info.appendChild(loc);

      var descP = document.createElement('p');
      descP.className = 'photo-desc';
      descP.textContent = photo.desc;
      info.appendChild(descP);

      photoDiv.appendChild(info);
      section.appendChild(photoDiv);
    });
  } else {
    var empty = document.createElement('p');
    empty.className = 'section-desc';
    empty.textContent = '尚未上传';
    section.appendChild(empty);
  }

  return section;
}

// ========================================
// 地图
// ========================================
var mapInstance = null;
var mapInitialized = false;

function initMap() {
  if (mapInitialized) return;
  mapInitialized = true;

  mapInstance = L.map('mapContainer', {
    zoomControl: false,
    attributionControl: false,
    worldCopyJump: true,
    minZoom: 2,
    maxZoom: 6,
    zoomSnap: 0.5,
    wheelDebounceTime: 60,
    inertiaDeceleration: 3000,
    preferCanvas: true
  });

  // 古典风格地图 — 深蓝海洋 + 暖色陆地
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 6,
    minZoom: 2
  }).addTo(mapInstance);

  // 叠加参考图层增强陆地色彩
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 6,
    minZoom: 2,
    opacity: 0.4
  }).addTo(mapInstance);

  // 添加光点
  mapLocations.forEach(function(loc) {
    var count = photos.filter(function(p) { return p.city === loc.page; }).length;
    var size = 8 + count * 2;

    var icon = L.divIcon({
      className: 'map-glow',
      html: '<div class="glow-dot" style="width:' + size + 'px;height:' + size + 'px;"></div>',
      iconSize: [size, size],
      iconAnchor: [size/2, size/2]
    });

    var marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(mapInstance);
    marker.bindTooltip(loc.name, {
      className: 'map-tooltip',
      direction: 'top',
      offset: [0, -size/2]
    });
    marker.on('click', function() {
      showPage(loc.page);
    });
  });

  // 让所有光点完整呈现在屏幕上，居中
  var bounds = L.latLngBounds(mapLocations.map(function(l) { return [l.lat, l.lng]; }));
  mapInstance.fitBounds(bounds, { padding: [40, 40] });
}

// ========================================
// 初始化 — 页面加载时执行
// ========================================
function init() {
  var mapSection = document.getElementById('mapPage');

  // 生成国家页面
  Object.keys(countries).forEach(function(countryId) {
    var page = buildCountryPage(countryId);
    if (page) {
      mapSection.parentNode.insertBefore(page, mapSection);
    }
  });

  // 生成城市页面
  Object.keys(cities).forEach(function(cityId) {
    var page = buildCityPage(cityId);
    if (page) {
      mapSection.parentNode.insertBefore(page, mapSection);
    }
  });

  // 生成首页照片墙
  buildPhotoWall(document.getElementById('homePhotoWall'), photos);
}

// 执行初始化
init();
