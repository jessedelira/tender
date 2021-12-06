package com.tender.app.configs;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.tender.app.models.Restaurant;
import com.tender.app.repositories.RestaurantRepository;
@Configuration
public class RestaurantConfig {

    @Bean
    CommandLineRunner createRestaurantsCommandLineRunner(RestaurantRepository repository){
        return args->{
      
            Restaurant one = new Restaurant("ChIJZdetswzjFYgRt6llMBsUaSk","Arby's","Fast Food","https://upload.wikimedia.org/wikipedia/commons/f/f4/Arby%27s_logo.svg","Fast-food chain, known for its roast beef, serving up hot & cold sandwiches, fries & shakes.","(260) 422-8142","220 W Coliseum Blvd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant two = new Restaurant("ChIJnbM4IRvjFYgRxBTWUU8q4sU","Wendy's","Fast Food","https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1920px-Wendy%27s_full_logo_2012.svg.png","Fast-food burger chain serving sides such as chili & baked potatoes.","(260) 422-8142","5701 Coldwater Rd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant three = new Restaurant("ChIJQQmUNg3jFYgRICFhWG0_GCQ","McDonald's","Fast Food","https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1920px-McDonald%27s_Golden_Arches.svg.png","Classic, long-running fast-food chain known for its burgers & fries.","(260) 483-1212","255 E Coliseum Blvd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant four = new Restaurant("ChIJ86G2NSbjFYgR892I3dXnmeo","CoreLife Eatery","Healthy","https://www.corelifeeatery.com/wp-content/uploads/corelife-eatery-web-logo-black.png","A place the creates clean, healthy, and great tasting food. All hearty bowls are complete with greens, grains, and broths.","(260) 247-8101","407 W Coliseum Blvd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant five = new Restaurant("ChIJJ6yoQxLjFYgRzHR-F8cdXc0","Taco Bell","Fast Food","https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/300px-Taco_Bell_2016.svg.png","Fast-food chain serving Mexican-inspired fare such as tacos, quesadillas & nachos.","(260) 484-6114","4747 Coldwater Rd, Fort Wayne, IN 46825","Mask Required, Dining Area Regularly Cleaned");
            Restaurant six = new Restaurant("ChIJMReARJnjFYgRqSRns5mryPc","MISSION BBQ","BBQ","https://upload.wikimedia.org/wikipedia/en/c/cf/Mission_BBQ_%28logo%29.svg","Casual chain featuring BBQ & American sides, plus memorabilia honoring soldiers & first responders.","(260) 306-5356","407 W Coliseum Blvd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant seven = new Restaurant("ChIJgb4fdbzjFYgRnMR6X3_ZrNM","Wingstop","Fast Food","https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Wingstop_logo.svg/1920px-Wingstop_logo.svg.png","Casual counter-serve chain serving a variety of chicken wings & sides.","(260) 739-7397","407 W Coliseum Blvd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant eight = new Restaurant("ChIJk2zaW3LjFYgRpbSeZaX3s7w","El Taquero","Mexican","https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/129276087_159906992527614_5389721716316337555_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lWUa3nQdmr4AX9_FPxm&_nc_ht=scontent-ort2-1.xx&oh=0689f8d873848d89b406e7440b1d2197&oe=61D343F9","A classic mexican style restaurant that serves taquila and original mexican tacos.","(260) 484-8226","4507 Coldwater Rd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant nine = new Restaurant("ChIJ9UVe8p_jFYgRQVr-_1CY1YE","Don Hall's Hollywood Drive-In","Fast Food","https://cdn.localdatacdn.com/in/fort-wayne/3442316/original/z01zz03dGk.jpg","Old-school diner featuring American mainstays such as hamburgers, fried chicken & patty melts.", "(260) 422-8142","4416 Lima Rd, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant ten = new Restaurant("ChIJ0wM4DfXjFYgRlcTNUnIGoT4","Taqueria La Piñata","Mexican","https://th.bing.com/th/id/OIP.R-8QsD1mBZtp5Mewb2tV6gHaEK?pid=ImgDet&rs=1","As a restaurant that offers homemade Mexican cuisine, we are proud to serve the best Mexican food possible. Come visit Taqueria La Piñata today!","(260) 483-8213","6121 N Clinton St, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant eleven = new Restaurant("ChIJY8yh8nXjFYgR9NwwziGn4rk","Skyline Chili","Fast Food","https://www.skylinechili.com/wp-content/uploads/2019/02/3Way_HotSauce_mobile.jpg","Skyline Chili restaurant chain. Famous for secret recipe Cincinnati-style chili & fast, friendly dine-in & drive-thru service.","(260) 203-4948","4021 Ice Way, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");
            Restaurant twelve = new Restaurant("ChIJf9wkLkDjFYgRhSaIHKY_pUY","Casa Ristorante Italiano","Italian","https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto,quality=50/https://cdn.doordash.com/media/photos/5e7d2d0f-6fe3-41fc-9e6d-4510656d5b60-retina-large.jpg","Casa Ristoranti Italiano are family owned and operated Italian restaurants serving authentic Italian pastas, pizzas, salads, soups, sandwiches, lunch specials and an array of Italian specialties.","(260) 338-2795","4111 Parnell Ave, Fort Wayne","Mask Required, Dining Area Regularly Cleaned");

            repository.saveAll(List.of(one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve));

        };
    }
}
