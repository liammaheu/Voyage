(function() {
  var flow;

  flow = new FlowComponent;

  flow.showNext(Home_Screen);

  Home_Screen.onClick(function() {
    return flow.showNext(Start_Screen);
  });

  Voyage_Logo.states.animate = {
    scale: 0.50,
    animationOptions: {
      time: 1,
      curve: Bezier.ease
    }
  };

  Touch_ID.states.animate = {
    scale: 1.50
  };

  ({
    animationOptions: {
      delay: 2,
      curve: Spring
    }
  });

  Voyage_Logo.onTap(function() {
    return Voyage_Logo.stateCycle();
  });

  loadingback.onDoubleClick(function() {
    return flow.showNext(Landing_Page);
  });

  Salt_Lake.onClick(function() {
    return flow.showNext(New_Voyage);
  });

  profile_button.onClick(function() {
    return flow.showNext(Voyager_Profile);
  });

  profile_button_1.onClick(function() {
    return flow.showNext(Voyager_Profile);
  });

  profile_button_2.onClick(function() {
    return flow.showNext(Voyager_Profile);
  });

  Home.onClick(function() {
    return flow.showNext(Landing_Page);
  });

  Home_1.onClick(function() {
    return flow.showNext(Landing_Page);
  });

  Home_2.onClick(function() {
    return flow.showNext(Landing_Page);
  });

  Home_3.onClick(function() {
    return flow.showNext(Landing_Page);
  });

  map_button_1.onClick(function() {
    return flow.showNext(Maps_Screen);
  });

  Profile_Slide.onClick(function() {
    return flow.showOverlayLeft(Slider_Profile);
  });

  follow_button.states.a = {
    fill: 0
  };

  follow_button.states.b = {
    curve: Bezier.easeIn(),
    fill: 100
  };

  Follow.onClick(function() {
    return follow_button.stateCycle();
  });

  Messages_text.onClick(function() {
    return flow.showNext(Messages_Screen);
  });

  Messages_button.onClick(function() {
    return flow.showNext(Messages_Screen);
  });

  felix_back_dash.onClick(function() {
    return flow.showNext(Landing_Page);
  });

  Home_Screen.onClick(function() {
    return flow.showNext(Start_Screen);
  });

  voyagenew.onClick(function() {
    return flow.showNext(Touch_Verification);
  });

  voyagenew.onClick(function() {
    return Touch_ID.stateCycle();
  });

  Touch_Verification.onTap(function() {
    return flow.showNext(Finance);
  });

  Finance.onClick(function() {
    return flow.showNext(trip_setup);
  });

  trip_setup.onSwipeDown(function() {
    return flow.showOverlayCenter(Check);
  });

  trip_setup.onClick(function() {
    ({
      delay: 2
    });
    return flow.showNext(New_Voyage);
  });

  map_button.onClick(function() {
    return flow.showNext(Maps_Screen);
  });

  dash_button_2.onClick(function() {
    return flow.showNext(Landing_Page);
  });

}).call(this);
