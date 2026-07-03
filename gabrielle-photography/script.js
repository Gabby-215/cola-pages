// ========================================
// 照片数据 — 添加/修改照片只编辑这里
// ========================================
// 格式: { img: "文件名", country: "国家ID", city: "城市ID", location: "地点·时间", desc: "描述" }
// 新照片放进 photos 文件夹，然后在这里加一行

var photos = [
  // === 大连 ===
  { img: "1695464.JPG", country: "china", city: "dalian", location: "星海公园海滩 · 2022年冬", desc: "星海公园是我在这个城市最喜欢的地方，能在这里看到本地居民最自然的生活状态：钓鱼、赶海、散步、游泳...这年冬天是大四的最后一个学期，那天非常冷，冷到相机电池都支撑不过1个小时。" },
  { img: "1695457.JPG", country: "china", city: "dalian", location: "星海公园码头 · 2022年冬", desc: "大连的冬天其实相比东北其他城市还算温和，但是也依旧冷的刺骨。冬天海边的晚霞颇为宁静，家家户户都在猫冬，偶尔有人到海边走走，我记得那天为了拍晚霞我帽子围巾手套口罩一个没少，依然冻的手指僵硬不能屈伸。", featured: true },
  { img: "1695458.JPG", country: "china", city: "dalian", location: "星海跨海大桥 · 2022年冬", desc: "其实我拍了很多次星海大桥的照片，但是这一次是我最满意的，无论是从色彩还是结构或者氛围。" , featured: true },
  { img: "1695465.JPG", country: "china", city: "dalian", location: "星海公园 · 2022年冬", desc: "大爷提着桶多半是在海滩上捡些海货，不过到底有什么丰收很难说，毕竟我没好意思过去问。" },
  { img: "1727959.JPG", country: "china", city: "dalian", location: "宿舍走廊 · 2023年", desc: "这时离退宿已经没多久了，宿舍里的人也越来越少，难得有这么空旷的楼道可以拍摄，当时我就在想，我得赶紧拍两张留个纪念，以后可没机会了，恰好窗外的阳光一点点渗透进楼道，我很是迷恋建筑结构形成的纵深感。" },

  // === 贵阳 ===
  { img: "1696063.JPG", country: "china", city: "guiyang", location: "河滨公园 · 2023年冬", desc: "这好像是我长大后第一次在贵阳坐摩天轮，小时候爷爷奶奶似乎也带我坐过，但是时间久远，记忆模糊。再说贵阳的冬很难得遇到晴空万里的日子，这张照片很长时间以来都是我的朋友圈背景。" , featured: true },
  { img: "1792818.JPG", country: "china", city: "guiyang", location: "大兴国寺 · 2024年初春", desc: "我的生日大多在每年春节前后的时间，趁着节庆总会和家人一起去寺里祈福，23岁生日的那天发了这组照片，配的文字是：我要第23年勇敢、坚毅且伟大。", featured: true },
 
  // === 苏州 ===
  // 虎丘湿地公园合集
  { img: "_DSC9856.JPG", country: "china", city: "suzhou", location: "虎丘湿地公园 · 2026年夏", group:"虎丘湿地公园 " ,desc: "一直都很想拍荷花，借用朋友的评论的一句词：翠盖佳人临水立，檀粉不匀香汗湿。终是在苏州圆了对荷花的念想" , featured: true },
  { img: "_DSC9892.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9897.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9895.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9777.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9781.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9857.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9869.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9881.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  { img: "_DSC9882.JPG", country: "china", city: "suzhou", group:"虎丘湿地公园 " },
  
  // 西园寺合集
  { img: "_DSC9681.JPG", country: "china", city: "suzhou", location: "西园寺 · 2026年春", group:"西园寺 " ,desc: "猫、龟、素面、抄经、寺庙，如果愿意，可以点壶茶在花园闲来无事看人间"  },
  { img: "_DSC9702.JPG", country: "china", city: "suzhou", group:"西园寺 " },
  { img: "_DSC9706.JPG", country: "china", city: "suzhou", group:"西园寺 " },
  { img: "_DSC9708.JPG", country: "china", city: "suzhou", group:"西园寺 " },
  { img: "_DSC9717.JPG", country: "china", city: "suzhou", group:"西园寺 " },
  { img: "_DSC9724.JPG", country: "china", city: "suzhou", group:"西园寺 " },
  { img: "_DSC9746.JPG", country: "china", city: "suzhou", group:"西园寺 " },
  { img: "IMG_7934.JPG", country: "china", city: "suzhou", group:"西园寺 " },
  { img: "IMG_7935.JPG", country: "china", city: "suzhou", group:"西园寺 " },

  // === 南京 ===
  { img: "_DSC9598.JPG", country: "china", city: "nanjing", location: "南京长江大桥 · 2026年春", desc: "在南京待的时间不算长，也就是一个周末的时间，早上去了中山陵，人多到诚心发问：大家都不上班的吗？不过下午到江边看日落的时候就很是愉快了" },
  { img: "_DSC9581.JPG", country: "china", city: "nanjing", location: "南京长江大桥 · 2026年春", desc: "可能四五月份都是整个江浙沪最舒适的季节，天气还算凉爽干燥，也不会觉得冷。江边有很多来看日落的人，各自坐在草地上感受带着点水腥味儿的江风。不远处还有几个人在直播唱歌，曲子欢快倒也应景" },
  { img: "_DSC9605.JPG", country: "china", city: "nanjing", location: "南京长江大桥 · 2026年春", desc: "桥是丈量水域的标尺" },
  { img: "_DSC9610.JPG", country: "china", city: "nanjing", location: "江景咖啡馆 · 2026年春", desc: "我无法用言语准确的描述这个画面在当下带给我的冲击。这种刻意布置的拍照打卡点，在我心里头一次实现了它的美学价值，尽管大多数时候这种网红布景都毫无美学可言" },
  { img: "_DSC9613.JPG", country: "china", city: "nanjing", location: "桥头堡 · 2026年春", desc: "“争气桥”的桥头堡，还能看出上个世纪国家发展的痕迹，历史建筑宏大的背景所带来的庄严和命运感并不会因为时间的推移而消逝" },
  { img: "_DSC9624.JPG", country: "china", city: "nanjing", location: "南京长江大桥 · 2026年春", desc: "总觉得这张照片有一种俄式硬核美学的感觉" , featured: true },
  { img: "_DSC9534.JPG", country: "china", city: "nanjing", location: "南京长江大桥 · 2026年春", desc: "窥探喜悦" },
  { img: "_DSC9579.JPG", country: "china", city: "nanjing", location: "南京长江大桥 · 2026年春", desc: "窥探喜悦" },
  { img: "_DSC9617.JPG", country: "china", city: "nanjing", location: "桥头堡 · 2026年春", desc: "“争气桥”的桥头堡，还能看出上个世纪国家发展的痕迹，历史建筑宏大的背景所带来的庄严和命运感并不会因为时间的推移而消逝" },

  // === 英国 - 杜伦 ===
  // 杜伦大教堂合集
  { img: "IMG_4503.JPG", country: "uk", city: "durham", location: "杜伦大教堂 · 2024年秋", group:"durham-cathedral" ,desc: "刚到英国的第二个月，东北部就已经冻的不行，教堂的灯光在深秋的夜里也显得格外庄重。参加完开学典礼之后第一次来认真的欣赏和观察这座恢弘的哥特式教堂的内部。大教堂后来成为了我在杜伦最喜欢的地方，喜欢它的庄严与宁静。周日去会碰到弥撒或者别的活动，我喜欢捕捉那些虔诚的瞬间，无论是单纯来欣赏建筑的游客，还是来虔诚祝祷的信徒" },
  { img: "_DSC0959.JPG", country: "uk", city: "durham", group:"durham-cathedral" },
  { img: "3ec632876k87d4324928e4f1b52b1d8b.JPG", country: "uk", city: "durham", group:"durham-cathedral" },
  { img: "463579f50s14421b6fd90c3a6a27a0ea.JPG", country: "uk", city: "durham", group:"durham-cathedral"  },
  { img: "IMG_4497.JPG", country: "uk", city: "durham", group:"durham-cathedral"  ,featured: true },
  { img: "IMG_4499 3.JPG", country: "uk", city: "durham", group:"durham-cathedral"  },
  { img: "IMG_4501.JPG", country: "uk", city: "durham", group:"durham-cathedral"  },
  { img: "IMG_4502.JPG", country: "uk", city: "durham", group:"durham-cathedral"  },
  { img: "_DSC0729.JPG", country: "uk", city: "durham", location: "杜伦EP公寓后山 · 2025年初", desc: "这片空地具体叫什么我已经不太记得了，但我时常会一个人来走走。英国的冬令时白天很短，往往下午四点多天就黑了，得赶在太阳落山之前跑到这来，这也是我在杜伦拍到的最美的一次晚霞。我记得我一个人靠在篱笆上，一个老大爷走过来问我是不是迷路了，可能他也没想到天寒地冻的会有人来这特地看晚霞。" },

  // === 英国 - 约克 ===
  { img: "acf9b3dcarf8aab20bc60dc4ec8a600f.jpg", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "那天的约克正逢阴天，光照实属不尽如人意，索性就全换成了黑白色调。出人意料的效果还不错。后面还拍到了他在街头演奏的照片，我也非常喜欢。" },
  { img: "48a6d6d63v9a608c09ced2e71c116705.JPG", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "总觉得有些可惜，杜伦离约克不远但是只匆匆地去了一次，黑白色调已经成为我记忆中约克的底色，想去看看晴天的样子" },
  { img: "276f1d813tb391aba03c814159292a02.jpg", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "我猜老头是个大学教授" },
  { img: "8187ea2b7n3cd7cc7d4a1d20c416c118.jpg", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "我记得我们顺着城墙走了一段，总感觉城墙到头儿的位置就是这个城市的边界" },
  { img: "634940242p59f0698ce97217d885ecc1 3.jpg", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "妙就妙在这四分之一的摩天轮" },
  { img: "d88f0f57en567b96b2195f7d69066e1a.jpg", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "当时只觉得十多磅的教堂门票贵，只拍了教堂外部的装饰。那时不知道我后面会在欧洲拍那么多的教堂，有机会一定要回去再拍一次" },
  { img: "f7a230db6p9a5ad2cb9c2625c2c88c80.jpg", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "为了等公交车恰好从桥中间穿过" },
  { img: "58405cf4am89f241193b41a3cfde6166.JPG", country: "uk", city: "york", location: "约克街道 · 2024年秋", desc: "欧洲的街头表演带来的人文关怀不亚于凛冬的一条羊毛围巾，对我来说是的.", featured: true },

  // === 英国 - St.Abbs ===
  { img: "_DSC0834.JPG", country: "uk", city: "stabbs", location: "St.Abbs · 2025年春", desc: "St.Abbs，位于苏格兰的东北海岸，承载了我在英国的第一次徒步体验。从Berwick-upon-tweed的镇上要坐一个小时公交车才能到，这张照片是我和朋友刚下公交走过路口，恰好转头看到海在小路的尽头。" },

  // === 英国 - 爱丁堡 ===
  { img: "4102cb6c1iad70a4d8c92f82bb9c8a59.jpg", country: "uk", city: "edinburgh", location: "爱丁堡 · 2024年冬", desc: "爱丁堡的建筑总有一种阴郁，尤其是在阴雨天总觉得这个城市带着一种神秘的怨念。但我是一个运气很好的人，几乎每一次造访迎接我的都是大晴天，哪怕是在湿冷大风的冬天。" },

  // === 西班牙 - 巴塞罗那 ===
  { img: "_DSC0986.jpg", country: "spain", city: "barcelona", location: "巴塞罗那 · 巴特罗之家 · 2025年春", desc: "巴特罗之家里我最喜欢的是那些充满想象力的灯饰和线条，龟背图案的顶灯是一进建筑看到的第一个设计，灯光柔和、平静，搭配着脚下的旋转楼梯缓缓把身体送上楼去。" },
  { img: "_DSC1027.JPG", country: "spain", city: "barcelona", location: "巴塞罗那 · 巴特罗之家 · 2025年春", desc: "这是巴特罗之家的顶楼，整个顶部的墙面都是毛茸茸的质感，光从窗台上落下来，朦胧的像梦境一样。" },

  // === 其他 ===
];

// ========================================
// 国家信息
// ========================================
var countries = {
  china:  { name: "中国",   en: "China",          desc: "生活足迹开发中" },
  uk:     { name: "英国",   en: "United Kingdom", desc: "我在这里度过了人生中极其动荡的一年，完成了硕士学业，经历了完整的，从破裂到重建整个生活的过程" },
  spain:  { name: "西班牙", en: "España",         desc: "欧洲排名第一喜欢的国家，热情、阳光、好吃、洒脱、高迪" },
  italy:  { name: "意大利", en: "Italia",         desc: "一个食物放冰箱不会变质的神奇国度，在意面和披萨里面我选便宜大柠檬" },
  france: { name: "法国",   en: "France",         desc: "雅，我一定还会在巴黎local法餐厅里一边点菜一边被纠正语法" },
  other:  { name: "其他",   en: "Elsewhere",      desc: "" }
};

// ========================================
// 城市信息
// ========================================
var cities = {
  dalian:     { name: "大连",                en: "Dalian",    country: "china", desc: "我本科四年所在的城市，也是真正意义上我摄影的起始地，是我离家之后第一个长居的城市，是我成年之后的第一个记忆方阵。" },
  guiyang:    { name: "贵阳",                en: "Guiyang",   country: "china", desc: "我的家乡，我回不去也离不开的家乡" },
  nanjing:    { name: "南京",                en: "Nanjing",    country: "china", desc: "印象最深刻的是南京长江大桥" },
  suzhou:     { name: "苏州",                en: "Suzhou",    country: "china", desc: "毕业之后工作的第一个城市，我很喜欢苏州的城市风貌，有江南水乡的温柔也有现代都市的繁华，住的时间不算很长，还有很多地方没有来得及去看" },
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
  { name: "南京",                lat: 32.060, lng: 118.747, page: "nanjing" },
  { name: "苏州",                lat: 31.304, lng: 120.620, page: "suzhou" },
  { name: "贵阳",                lat: 26.583, lng: 106.713, page: "guiyang" },
  { name: "Durham",         lat: 54.776, lng: -1.574,  page: "durham" },
  { name: "York",           lat: 53.959, lng: -1.086,  page: "york" },
  { name: "Edinburgh",    lat: 55.953, lng: -3.188,  page: "edinburgh" },
  { name: "St.Abbs",             lat: 55.910, lng: -2.092,  page: "stabbs" },
  { name: "Barcelona",  lat: 41.385, lng: 2.173,   page: "barcelona" }
];

// ========================================
// 页面切换
// ========================================
var pageHistory = []; // 页面历史栈，记录浏览轨迹

function showPage(pageId) {
  var home = document.getElementById('home');
  var pages = document.querySelectorAll('.page');

  // 记住当前页面到历史栈
  var currentActive = null;
  pages.forEach(function(p) {
    if (p.classList.contains('active')) currentActive = p.id;
  });
  if (!home.classList.contains('hidden') && !currentActive) {
    currentActive = 'home';
  }
  if (currentActive && currentActive !== pageId) {
    pageHistory.push(currentActive);
  }

  home.classList.add('hidden');
  pages.forEach(function(p) { p.classList.remove('active'); });

  if (pageId === 'home') {
    home.classList.remove('hidden');
    pageHistory = []; // 回到首页清空历史
  } else {
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'mapPage') {
      setTimeout(initMap, 100);
    }
  }

  window.scrollTo(0, 0);
}

// 返回上一页（从历史栈取）
function goBack() {
  var prev = pageHistory.pop();
  if (!prev) prev = 'home';
  
  var home = document.getElementById('home');
  var pages = document.querySelectorAll('.page');
  home.classList.add('hidden');
  pages.forEach(function(p) { p.classList.remove('active'); });
  
  if (prev === 'home') {
    home.classList.remove('hidden');
  } else {
    document.getElementById(prev).classList.add('active');
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
  // 隐藏箭头
  var arrows = document.querySelectorAll('.overlay-arrow');
  arrows.forEach(function(a) { a.style.display = 'none'; });
}

// ========================================
// 合集大图翻页
// ========================================
var currentGroupPhotos = [];
var currentGroupIndex = 0;
var currentGroupLocation = '';

function openGroupPhoto(photoList, index, location) {
  currentGroupPhotos = photoList;
  currentGroupIndex = index;
  currentGroupLocation = location;
  showGroupPhoto();
  
  // 显示箭头
  document.getElementById('arrowLeft').style.display = 'flex';
  document.getElementById('arrowRight').style.display = 'flex';
}

function showGroupPhoto() {
  var photo = currentGroupPhotos[currentGroupIndex];
  document.getElementById('overlayImg').src = 'photos/' + photo.img;
  document.getElementById('overlayLoc').textContent = currentGroupLocation;
  document.getElementById('overlayDesc').textContent = '';
  document.getElementById('photoOverlay').style.display = 'flex';
}

function prevPhoto() {
  currentGroupIndex = (currentGroupIndex - 1 + currentGroupPhotos.length) % currentGroupPhotos.length;
  showGroupPhoto();
}

function nextPhoto() {
  currentGroupIndex = (currentGroupIndex + 1) % currentGroupPhotos.length;
  showGroupPhoto();
}

// ========================================
// 生成照片墙（首页网格）
// ========================================
function buildPhotoWall(container, photoList) {
  photoList.forEach(function(photo) {
    var div = document.createElement('div');
    div.className = 'wall-item';
    div.onclick = function() {
      // 如果属于合集，找到合集的描述
      var desc = photo.desc || '';
      var loc = photo.location || ''
      if (photo.group) {
        var groupMain = photos.find(function(p) { return p.group === photo.group && p.desc; });
        if (groupMain) {
          desc = groupMain.desc;
          if (!loc) loc = groupMain.location || '';
        }
      }
      openPhoto('photos/' + photo.img, loc, desc);
    };

    var img = document.createElement('img');
    img.src = 'photos/' + photo.img;
    img.alt = (photo.desc || photo.location || '').substring(0, 20);

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
  back.onclick = function(e) { e.preventDefault(); goBack(); };
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

  section.appendChild(header);

  // 城市封面网格（每个城市选第一张照片做封面）
  if (cityIds.length > 0) {
    var grid = document.createElement('div');
    grid.className = 'city-grid';
    
    cityIds.forEach(function(cityId) {
      var city = cities[cityId];
      if (!city.name) return;
      
      // 选这个城市的第一张照片做封面
      var coverPhoto = countryPhotos.find(function(p) { return p.city === cityId; });
      
      var card = document.createElement('div');
      card.className = 'city-card';
      card.onclick = function() { showPage(cityId); };
      
      var img = document.createElement('img');
      img.src = 'photos/' + coverPhoto.img;
      img.alt = city.name;
      card.appendChild(img);
      
      var name = document.createElement('p');
      name.className = 'city-card-name';
      name.textContent = city.name;
      card.appendChild(name);
      
      var en = document.createElement('p');
      en.className = 'city-card-en';
      en.textContent = city.en;
      card.appendChild(en);
      
      grid.appendChild(card);
    });
    
    section.appendChild(grid);
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
  back.onclick = function(e) { e.preventDefault(); goBack(); };
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

  // 照片列表（同 group 的照片合成一个卡片）
  if (cityPhotos.length > 0) {
    // 先把照片分组：有 group 的放一起，没 group 的各自独立
    var groups = [];
    var seenGroups = [];
    
    cityPhotos.forEach(function(photo) {
      if (photo.group) {
        // 属于某个合集
        if (seenGroups.indexOf(photo.group) === -1) {
          // 第一次遇到这个 group，创建一个合集条目
          var groupMain = cityPhotos.find(function(p) { return p.group === photo.group && p.desc; });
          groups.push({
            type: 'group',
            groupId: photo.group,
            cover: photo,
            mainPhoto: groupMain || photo,
            photos: cityPhotos.filter(function(p) { return p.group === photo.group; })
          });
          seenGroups.push(photo.group);
        }
      } else {
        // 独立照片
        groups.push({ type: 'single', photo: photo });
      }
    });
    
    groups.forEach(function(item) {
      var photoDiv = document.createElement('div');
      photoDiv.className = 'photo';
      
      if (item.type === 'group') {
        // 合集卡片 — 点击进入合集页面
        var groupPhotos = item.photos;
        var mainPhoto = item.mainPhoto;
        var groupId = item.groupId;
        
        photoDiv.onclick = function() { showGroupPage(groupId); };
        
        var img = document.createElement('img');
        img.src = 'photos/' + groupPhotos[0].img;
        img.alt = mainPhoto.location || '';
        photoDiv.appendChild(img);
        
        var info = document.createElement('div');
        info.className = 'photo-info';
        
        var loc = document.createElement('p');
        loc.className = 'photo-location';
        loc.textContent = mainPhoto.location || '';
        info.appendChild(loc);
        
        var descP = document.createElement('p');
        descP.className = 'photo-desc';
        descP.textContent = mainPhoto.desc || '';
        info.appendChild(descP);
        
        // 显示照片数量
        var count = document.createElement('p');
        count.className = 'photo-count';
        count.textContent = groupPhotos.length + ' 张照片';
        info.appendChild(count);
        
        photoDiv.appendChild(info);
      } else {
        // 独立照片（原逻辑）
        var photo = item.photo;
        photoDiv.onclick = function() {
          openPhoto('photos/' + photo.img, photo.location || '', photo.desc || '');
        };
        
        var img = document.createElement('img');
        img.src = 'photos/' + photo.img;
        img.alt = photo.location || '';
        photoDiv.appendChild(img);
        
        var info = document.createElement('div');
        info.className = 'photo-info';
        
        var loc = document.createElement('p');
        loc.className = 'photo-location';
        loc.textContent = photo.location || '';
        info.appendChild(loc);
        
        var descP = document.createElement('p');
        descP.className = 'photo-desc';
        descP.textContent = photo.desc || '';
        info.appendChild(descP);
        
        photoDiv.appendChild(info);
      }
      
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
// 合集详情页
// ========================================
function showGroupPage(groupId) {
  // 找到这个合集的所有照片
  var groupPhotos = photos.filter(function(p) { return p.group === groupId; });
  if (groupPhotos.length === 0) return;
  
  // 找到带描述的主照片
  var mainPhoto = groupPhotos.find(function(p) { return p.desc; }) || groupPhotos[0];
  
  // 记住当前页面到历史栈，然后隐藏
  var home = document.getElementById('home');
  var pages = document.querySelectorAll('.page');
  var currentActive = null;
  pages.forEach(function(p) {
    if (p.classList.contains('active')) currentActive = p.id;
  });
  if (!home.classList.contains('hidden') && !currentActive) {
    currentActive = 'home';
  }
  if (currentActive) {
    pageHistory.push(currentActive);
  }
  home.classList.add('hidden');
  pages.forEach(function(p) { p.classList.remove('active'); });
  
  // 如果合集页已存在先删掉
  var existing = document.getElementById('groupPage_' + groupId);
  if (existing) existing.remove();
  
  // 创建合集页面
  var section = document.createElement('section');
  section.id = 'groupPage_' + groupId;
  section.className = 'page active';
  
  // 顶部
  var header = document.createElement('div');
  header.className = 'page-header';
  
  var back = document.createElement('a');
  back.href = '#';
  back.className = 'back';
  back.textContent = '← 返回';
  back.onclick = function(e) { e.preventDefault(); goBack(); };
  header.appendChild(back);
  
  var h2 = document.createElement('h2');
  h2.textContent = mainPhoto.location || '';
  header.appendChild(h2);
  
  if (mainPhoto.desc) {
    var desc = document.createElement('p');
    desc.className = 'section-desc';
    desc.textContent = mainPhoto.desc;
    header.appendChild(desc);
  }
  
  section.appendChild(header);
  
  // 照片网格
  var wall = document.createElement('div');
  wall.className = 'photo-wall';
  section.appendChild(wall);
  
  groupPhotos.forEach(function(photo, index) {
    var div = document.createElement('div');
    div.className = 'wall-item';
    div.onclick = function() {
      openGroupPhoto(groupPhotos, index, mainPhoto.location || '');
    };
    
    var img = document.createElement('img');
    img.src = 'photos/' + photo.img;
    img.alt = (mainPhoto.location || '').substring(0, 20);
    div.appendChild(img);
    wall.appendChild(div);
  });
  
  // 插入到地图页之前
  var mapSection = document.getElementById('mapPage');
  mapSection.parentNode.insertBefore(section, mapSection);
  
  window.scrollTo(0, 0);
}
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

  // 生成首页照片墙 — 只展示 featured: true 的照片
  var featured = photos.filter(function(p) { return p.featured; });
  buildPhotoWall(document.getElementById('homePhotoWall'), featured);
}

// 执行初始化
init();
