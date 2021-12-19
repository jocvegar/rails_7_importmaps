// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import "components/react";
import "components/vue";
import "custom/gsap";
import AOS from "aos";
AOS.init();
import LocalTime from "local-time";
LocalTime.start();
