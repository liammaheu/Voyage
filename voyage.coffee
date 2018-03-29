# Voyage -- Prototype by Michael Liam Maheu
flow = new FlowComponent
flow.showNext(Home_Screen)


Home_Screen.onClick ->
	flow.showNext(Start_Screen)

# Add states and animation options
Voyage_Logo.states.animate =
	scale: 0.50
	animationOptions:
		time: 1
		curve: Bezier.ease

Touch_ID.states.animate =
		scale: 1.50
	animationOptions:
		delay: 2
		curve: Spring



# Cycle between states
Voyage_Logo.onTap ->
	Voyage_Logo.stateCycle()

#Navigation
loadingback.onDoubleClick ->
	flow.showNext(Landing_Page)

Salt_Lake.onClick -> flow.showNext(New_Voyage)

#Profile Navigation Cluster
profile_button.onClick ->
	flow.showNext(Voyager_Profile)
profile_button_1.onClick ->
	flow.showNext(Voyager_Profile)
profile_button_2.onClick ->
	flow.showNext(Voyager_Profile)

#Home Navigation
Home.onClick ->
	flow.showNext(Landing_Page)
Home_1.onClick ->
	flow.showNext(Landing_Page)
Home_2.onClick ->
	flow.showNext(Landing_Page)
Home_3.onClick ->
	flow.showNext(Landing_Page)

#Map Button !!!!!!!
map_button_1.onClick ->
	flow.showNext(Maps_Screen)


# Show Mneu overlay on click
Profile_Slide.onClick ->
	flow.showOverlayLeft(Slider_Profile)


#follow button state cycles
follow_button.states.a =
	fill: 0

follow_button.states.b =
	curve: Bezier.easeIn()
	fill: 100

Follow.onClick ->
	follow_button.stateCycle()

#Messages
Messages_text.onClick ->
	flow.showNext(Messages_Screen)

Messages_button.onClick ->
	flow.showNext(Messages_Screen)

#nav

felix_back_dash.onClick ->
	flow.showNext(Landing_Page)

Home_Screen.onClick ->
	flow.showNext(Start_Screen)

#New Voyage -- Sequence

voyagenew.onClick ->
	flow.showNext(Touch_Verification)


#referencing the Touch ID animation -- line 16
voyagenew.onClick -> Touch_ID.stateCycle()

Touch_Verification.onTap ->
	flow.showNext(Finance)

Finance.onClick ->
	flow.showNext(trip_setup)


#Question States

trip_setup.onSwipeDown ->
	flow.showOverlayCenter(Check)

trip_setup.onClick ->
	delay: 2
	flow.showNext(New_Voyage)


#create an if statement that negociates if (state A is true, then execute stateB flow switch)

#new
map_button.onClick ->
	flow.showNext(Maps_Screen)

dash_button_2.onClick ->
	flow.showNext(Landing_Page)


#voyage_join.onClick ->
#	flow.showNext(Voyager_Profile)

#Join Voyage journey here
