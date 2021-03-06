<div ng-controller="HomeController as home">
      <div class="row row-offcanvas row-offcanvas-right">
          <div class="row">
            <div id="custom-search-input">
              <div class="input-group col-md-12">
                <input ng-model="home.query" type="text" class="  search-query form-control" placeholder="Search" />
              <span class="input-group-btn">
                <button ng-click="home.search()" class="btn btn-danger" type="button">
                  <span class=" glyphicon glyphicon-search"></span>
                </button>
              </span>
               </div>
             </div>
      </div>

        <!--<div class="col-xs-12 col-sm-9">-->
          <!--<p class="pull-right visible-xs">-->
            <!--<button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>-->
          <!--</p>-->
          <!--<div id="myCarousel" class="carousel slide" data-ride="carousel">-->
            <!--<ol class="carousel-indicators">-->
              <!--<li data-target="#myCarousel" data-slide-to="0" class="active"></li>-->
              <!--<li data-target="#myCarousel" data-slide-to="1"></li>-->
            <!--</ol>-->

            <!--<div class="carousel-inner" role="listbox">-->
              <!--<div class="item active">-->
                <!--<img src=".jpg">-->
            <!--</div>-->

            <!--<div class="item">-->
            <!--<img src=".jpg">-->
            <!--</div>-->
          <!--</div>-->

          <!--<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">-->
            <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
            <!--<span class="sr-only">Previous</span>-->
          <!--</a>-->
          <!--<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">-->
            <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
            <!--<span class="sr-only">Next</span>-->
          <!--</a>-->
        <!--</div>-->
        <div class="row">
        
        
          <div class="col-xs-6 col-lg-4" ng-repeat = "prod in home.prodlist">
            
            <img src="{{prod.photos[0].url}}" height="200" width="200">
            <h3>{{prod.name}}</h3>
            <p> {{prod.description}}</p>
            <p> {{prod.cum_rating}}</p>
            <label> Cost </label>
            <p>{{prod.cost | currency: '&#8377;'}}</p>
            <!-- {{prod.product_id}} -->
            <p><a class="btn btn-default"  ui-sref = "products({prodId: prod.product_id})" role="button">View</a></p>
            <p><a class="btn btn-default" ng-click = "home.addToCart(prod.product_id)" role="button">Add to Cart</a></p>
            <p><a class="btn btn-default" ng-click = "home.addToWishlist(prod.product_id)" role="button">Add to Wishlist</a></p>
          </div>
      
          </div> 
        </div>
      
      <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
      <h2>Choose category:</h2>
        <u class="list-group">
      
          <li ng-repeat="each in home.catList" ui-sref="category({catId: each.category_id})" class="list-group-item" value="{{each.category_id}}">{{each.name}}</li>
        
      </u>
      </div>
    </div>
</div>