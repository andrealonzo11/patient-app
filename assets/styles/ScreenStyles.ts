import {StyleSheet} from 'react-native';
import {
  Border,
  Color,
  Font,
  FontFamily,
  Gap,
  Margin,
  Padding,
  Shadow,
  ZIndex,
} from './GlobalStyles';


export const ScreenStyles = StyleSheet.create({
  defaultContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  defaultContainer1: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.white,
    gap: Gap.gap16,
  },
  defaultFlexContainer: {
    flex: 1,
  },
  // SplashScreen start
  splashScreenContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  splashScreenAnimationContainer: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: 'center',
  },
  splashScreenLabelContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 48,
  },
  // SplashScreen End
  // ActivityScreen, AccountScreen
  activitySectionContainerOngoing: {
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  activitySectionContainerPast: {
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  activitySectionTitle: {
    fontSize: Font.fontLarge,
    fontWeight: '500',
    color: Color.black,
    textTransform: 'capitalize',
  },
  containerSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: Color.secondaryButton,
    height: 48,
  },
  container: {
    flex: 1,
    padding: 5,
  },
  registerText: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  bodyText: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 14,
    padding: 10,
  },
  fieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleLogin: {
    fontFamily: FontFamily.defaultFontBold,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '500',
    color: Color.black,
  },
  feedback: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 16,
    padding: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: Shadow.color,
    shadowOffset: Shadow.offset,
    shadowOpacity: Shadow.opacity,
    shadowRadius: Shadow.radius,
    elevation: Shadow.elevation,
    textAlignVertical: 'top',
    fontSize: 16,
  },

  containerLabelStyle: {
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  labelStyle: {
    fontSize: Font.fontLarge,
    fontFamily: FontFamily.defaultFont,
    color: Color.black,
  },
  imageContainer: {
    borderRadius: Border.b4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: Border.b4,
    resizeMode: 'cover',
  },
  //OrderDetailScreenStyles.submitButton
  submitButton: {
    borderRadius: 4,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  //OrderDetailScreenStyles.titleStyle
  submitButtonTitle: {
    fontSize: Font.fontNormal,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '700',
  },
  //OrderDetailScreenStyles.container
  screenContainer: {
    backgroundColor: Color.white,
    gap: 16,
  },
  screenContainer1: {
    backgroundColor: Color.white,
    gap: 16,
    marginBottom: Margin.m100,
  },
  screenContainer2: {
    backgroundColor: Color.grey5,
    gap: Gap.gap16,
  },
  defaultGreyScreenContainer: {
    backgroundColor: Color.grey5,
    gap: 16,
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 16,
  },
  sectionButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionHeader: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '700',
    padding: 0,
    lineHeight: 16,
  },

  sectionHeader2: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '500',
    padding: 0,
    lineHeight: 16,
  },
  sectionHeader3: {
    fontSize: Font.fontExtraSmall,
    color: Color.grey4,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    padding: 0,
    lineHeight: 16,
  },

  sectionHeader4: {
    fontSize: Font.fontSmall,
    color: Color.grey4,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    padding: 0,
    lineHeight: 16,
  },

  appNotifEditTextStyle: {
    fontSize: Font.fontNormal,
    color: Color.primary,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    lineHeight: 24,
  },
  appNotifEditContainerStyle: {
    justifyContent: 'flex-end',
    width: 50,
  },
  sectionPrescription: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  deliveRxRowSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveRxFooterText: {
    fontSize: Font.fontNormal,
    color: Color.grey4,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '500',
    padding: 0,
    lineHeight: 24,
  },
  pwdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    gap: 16,
  },
  chatButtonContainer: {
    borderWidth: 1,
    height: 44,
    width: 44,
    borderColor: Color.primary,
    borderRadius: Border.b4,
    backgroundColor: Color.secondaryButton,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  //{OrderDetailScreenStyles.chatContainer}
  chatCheckBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  //{OrderDetailScreenStyles.chatButtonContainer}
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  leftContent: {
    flex: 1,
  },
  orName: {
    fontSize: 16,
    fontFamily: FontFamily.defaultFontBold,
    color: Color.black,
  },
  orFieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    gap: 10,
  },
  itemInfo: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    fontWeight: 'bold',
    color: Color.black,
  },
  totalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  detailsView: {
    borderWidth: 1,
    width: 373,
    borderRadius: 5,
    padding: 10,
  },
  detailsText: {
    fontWeight: 'normal',
    color: Color.black,
  },
  detailsContainer: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    paddingBottom: 5,
  },
  containerMain: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  containerHome: {
    flex: 1,
    backgroundColor: Color.grey5,
  },
  headerHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  headerOrderReceive: {
    flexDirection: 'row',
    alignItems: 'center', // Center items horizontally
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    width: 100,
    height: 70,
  },
  cardViewContainer: {
    flex: 1,
  },
  containerOrderDetail: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  selectItemCointaner: {
    flex: 1,
    backgroundColor: Color.white,
  },
  detailTextOrderReceive: {
    fontSize: Font.fontNormal,
    fontFamily: FontFamily.defaultFontBold,
    color: Color.black,
    fontWeight: '700',
    textAlign: 'justify',
  },
  secondaryDetailTextOrderReceive: {
    fontSize: Font.fontSmall,
    fontFamily: FontFamily.defaultFont,
    color: Color.grey4,
    textAlign: 'justify',
    lineHeight: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    marginTop: 40,
  },
  itemListContainer: {},
  container1: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontFamily: FontFamily.defaultFontBold,
  },
  description: {
    fontSize: 14,
    fontFamily: FontFamily.defaultFont,
    color: Color.grey4,
  },
  containerSelectItem: {},
  subContainerSelectItem: {
    marginVertical: 24,
    marginHorizontal: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    gap: 24,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Color.secondaryButton,
    backgroundColor: Color.grey5,
  },
  cart: {
    height: 44,
    width: 44,
    padding: 10,
    backgroundColor: Color.primary,
    borderRadius: Border.b4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  itemCountBG: {
    position: 'absolute',
    bottom: 35,
    right: -7,
    backgroundColor: 'red',
    borderRadius: 100,
    height: 20,
    width: 20,
    padding: 2,
    justifyContent: 'center',
  },
  itemCountText: {
    textAlign: 'center',
    color: Color.white,
    fontSize: Font.fontExtraSmall,
    fontFamily: FontFamily.defaultFont,
  },
  containerRegistration: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  labelStyleRegistration: {
    fontSize: Font.fontLarge,
    fontFamily: FontFamily.defaultFontBold,
    color: Color.black,
  },
  registerTextStyle: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  imageContainerLogin: {
    backgroundColor: Color.lightgrey,
    borderRadius: 8,
    padding: 10,
  },
  imageLogin: {
    height: 100,
    borderRadius: 8,
  },

  banner: {
    flex: 1,
    resizeMode: 'cover',
    height: 120,
  },

  //Select Merchant Screen
  containerMerchant: {
    flex: 1,
  },

  itemListContainer5: {
    backgroundColor: Color.lightgrey,
    borderRadius: 8,
    marginVertical: 5,
    padding: 5,
    zIndex: ZIndex.level5,
  },
  itemListContainer4: {
    backgroundColor: Color.lightgrey,
    borderRadius: 8,
    marginVertical: 5,
    padding: 5,
    zIndex: ZIndex.level4,
  },
  itemListContainer3: {
    backgroundColor: Color.lightgrey,
    borderRadius: 8,
    marginVertical: 5,
    padding: 5,
    zIndex: ZIndex.level3,
  },
  itemListContainer2: {
    backgroundColor: Color.lightgrey,
    borderRadius: 8,
    marginVertical: 5,
    padding: 5,
    zIndex: ZIndex.level2,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },

  /* ChatFormStyles */
  chatFormName: {
    fontSize: 16,
    fontFamily: FontFamily.defaultFontBold,
    color: Color.black,
  },

  chatFormFieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  chatFormMore: {
    alignItems: 'center',
  },
  individualChatContainer: {
    height: '100%',
  },
  orderInquirySelectionContainer: {
    flex: 1,
    gap: 16,
  },
  shadowContainer: {
    shadowColor: Shadow.color,
    shadowOffset: Shadow.offset,
    shadowOpacity: Shadow.opacity,
    shadowRadius: Shadow.radius,
    elevation: Shadow.elevation,
  },
  modalHeaderContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Color.white,
  },

  bottomButtonChildContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  borderTop: {
    borderTopWidth: Border.width.w1,
    borderTopColor: Color.grey,
  },
  paddingTop20: {
    paddingTop: Padding.p20,
  },
  paddingBottom20: {
    paddingBottom: Padding.p20,
  },

  radioButtonScreen: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollViewBottomAllowance: {
    marginBottom: 120,
  },
  rateRiderContainer: {
    padding: 20,
    height: '100%',
    backgroundColor: Color.white,
  },
  rateRiderHead: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4D545E',
  },
  rateRiderId: {
    fontWeight: '400',
    fontSize: 16,
    color: '#2D7171',
  },
  rateRiderHeadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateRiderAvatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 20,
  },
  rateRiderQuestion: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#4D545E',
    lineHeight: 24,
  },
  rateRiderStarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingBottom: 20,
  },
  rateRiderFormContainer: {
    width: '100%',
  },
  rateRiderFeedbackLabel: {
    color: '#7B8493',
    fontWeight: '400',
    fontSize: 14,
    paddingBottom: 10,
  },
  rateRiderTextAreaContainer: {
    borderWidth: 1,
    height: 157,
    borderRadius: 4,
    borderColor: '#AEB3BC',
    justifyContent: 'space-between',
  },
  rateRiderSubmit: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    margin: 20,
  },
  rateRiderTextAreaIcon: {
    paddingBottom: 12,
    paddingRight: 12,
    alignItems: 'flex-end',
  },
  viewImageContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.black,
  },

  viewImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'stretch',
  },

  orderRiderLabel1: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '500',
    padding: 0,
  },
  orderRiderLabel2: {
    fontSize: Font.fontSmall,
    color: Color.placeholder,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '400',
    padding: 0,
  },
  orderRiderImageContainer: {
    borderRadius: 100,
  },
  orderRiderImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  merchantSectionContainer: {
    backgroundColor: Color.grey5,
    borderRadius: Border.b4,
    padding: 16,
    gap: 16,
  },
  merchantSectionLabel1: {
    fontSize: Font.fontExtraSmall,
    color: Color.primary,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '500',
    padding: 0,
  },
  merchantSectionLabel2: {
    fontSize: Font.fontSmall,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '400',
    padding: 0,
  },
  showLestlabel: {
    fontSize: Font.fontSmall,
    color: Color.primary,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    padding: 0,
  },

  showRatelabel: {
    fontSize: Font.fontNormal,
    color: Color.primary,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    padding: 0,
  },
  toaster: {
    paddingHorizontal: 20,
    marginVertical: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  },

  addCustomItemModalSubmitButton: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCustomItemModalSubmitButtonTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },

  orderScreenContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  screenHeaderContainer: {
    height: 84,
    backgroundColor: Color.white,
    shadowColor: Shadow.color,
    shadowOffset: Shadow.offset,
    shadowOpacity: Shadow.opacity,
    shadowRadius: Shadow.radius,
    elevation: Shadow.elevation,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: Border.width.w1,
    borderColor: Color.lightgrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenHeaderLabel: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontHuge,
    fontWeight: '500',
    color: Color.black,
  },
  profileScreenHeader: {
    height: 84,
    fontWeight: '700',
    color: 'white',
  },
  chatSendIcon: {
    paddingRight: 20,
    paddingTop: 10,
  },
  chatLeft: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#AEB3BC',
    color: 'black',
  },
  chatRight: {
    backgroundColor: '#2D7171',
    padding: 8,
    borderRadius: 5,
  },
  chatInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
    marginRight: 10,
  },

  profileScreenContainer: {
    backgroundColor: Color.white,
    height: '100%',
  },
  profileScreenBodyContainer: {
    backgroundColor: Color.white,
    paddingVertical: Padding.p24,
    paddingHorizontal: Padding.p20,
  },

  CPrivacyPolicy: {
    fontFamily: FontFamily.defaultFont,
    fontSize: 12,
    textAlign: 'justify',
    alignContent: 'center',
    color: '#4D545E',
    fontWeight: '400',
    lineHeight: 16,
    marginHorizontal: 10,
  },
  CTermsAndCondition: {
    fontFamily: FontFamily.defaultFont,
    fontSize: 12,
    textAlign: 'justify',
    alignContent: 'center',
    color: '#4D545E',
    fontWeight: '400',
    lineHeight: 16,
    marginHorizontal: 10,
  },
  bioCourierOrderButton: {
    flex: 1,
    backgroundColor: Color.secondaryButton,
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  customButtonContainer: {
    flex: 1,
    backgroundColor: Color.secondaryButton,
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    alignItems: 'center',
    borderRadius: 4,
    height: 62,
    margin: 0,
    padding: 16,
  },

  customButtonText: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    padding: 0,
    lineHeight: 24,
  },
  bioCourierInputContainer: {
    gap: 16,
  },
  bioCourierLabel: {
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '400',
    fontSize: Font.fontSmall,
    color: Color.grey4,
  },
  bioCourierInput: {
    height: 48,
    margin: 0,
  },
  rateRiderTextInput: {
    padding: 12,
    paddingTop: 12,
    textAlignVertical: 'top',
    color: '#AEB3BC',
  },
  changePassLabel: {
    fontWeight: '400',
    fontSize: 14,
    color: '#7B8493',
  },
  changePassContainer: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    gap: 16,
  },
  changePassTextRed: {
    fontWeight: '400',
    fontSize: 14,
    color: 'red',
  },
  changePassText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#AEB3BC',
  },
  changePassButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    height: 76,
  },
  changePassButtonDisabled: {
    borderRadius: 4,
    height: 44,
    backgroundColor: '#E0E2E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changePassTextDisabled: {
    fontSize: 16,
    fontWeight: '700',
    color: '#AEB3BC',
  },
  settingsOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  settingsText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#7B8493',
  },
  settingsLine: {
    height: 1,
    backgroundColor: '#D0D4D9',
  },
  settingsIcons: {
    height: 16,
    width: 16,
    transform: [{rotate: '180deg'}],
  },
  settingsLogout: {
    fontWeight: '700',
    fontSize: 16,
    color: '#DD331D',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notifSettingtext: {
    fontWeight: '500',
    fontSize: 16,
    color: '#7B8493',
  },
  logOutContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    height: 56,
  },
  pMSettingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 16,
  },
  pMSettingsCurrent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    flex: 1,
  },
  pmSettingsText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#7B8493',
  },
  pMSettingsSubHead: {
    fontWeight: '500',
    fontSize: 16,
    color: '#4D545E',
  },
  heightFull: {
    height: '100%',
  },
  cpText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#4D545E',
  },
  cpContainer: {
    height: 48,
    borderRadius: 4,
    backgroundColor: '#E0E2E5',
    justifyContent: 'center',
    padding: 12,
  },
  cpEmailText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#AEB3BC',
  },
  cpInputContainer: {
    gap: 8,
  },
  cpInputStyle: {
    height: 48,
    borderRadius: 4,
  },
  pmsContainer: {
    gap: 16,
  },
  pmsBack: {
    height: 16,
    width: 16,
    transform: [{rotate: '180deg'}],
  },
  settingsButton: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  emptyNotif: {
    gap: 10,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBG: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  emptyNotifTextContainer: {
    top: 80,
    gap: 10,
    alignItems: 'center',
  },
  emptyNotifTextContainer1: {
    gap: 10,
    alignItems: 'center',
  },
  notiff: {
    fontFamily: FontFamily.defaultFontMediumBold,
    fontSize: 16,
    fontWeight: '500',
    color: '#AEB3BC',
  },
  notiff1: {
    fontFamily: FontFamily.defaultFontMediumBold,
    fontSize: 16,
    fontWeight: '500',
    color: '#AEB3BC',
  },
  notif: {
    fontFamily: FontFamily.defaultFontMediumBold,
    fontSize: 16,
    fontWeight: '500',
    color: '#AEB3BC',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  notif3: {
    flexDirection: 'row',
    gap: 20,
  },
  privacyContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Color.white,
  },

  // ActivityScreen start
  emptyActivityContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: Padding.p16,
    paddingHorizontal: Padding.p20,
    marginTop: Margin.m24,
  },
  emptyActivityLabelContainer: {
    marginTop: Margin.m20,
  },
  emptyActivityLabel1: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '500',
    lineHeight: 24,
    alignSelf: 'center',
    color: Color.placeholder,
  },
  emptyActivityLabel2: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontExtraSmall,
    fontWeight: '400',
    lineHeight: 16,
    alignSelf: 'center',
    color: Color.placeholder,
    marginTop: Margin.m10,
  },
  emptyActivityButtonContainer: {
    marginTop: Margin.m20,
    width: '100%',
  },
  // ActivityScreen end
  flexContainer: {
    flex: 1,
  },
  flexContainer1: {
    flex: 1,
    gap: Gap.gap20,
  },
  notifViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heightView: {
    height: 16,
  },
  codeValidation: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexGap: {
    gap: 16,
  },
  flexDirJusSB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryDetails: {
    backgroundColor: 'white',
    gap: 16,
    marginTop: 8,
  },
  flexJustPadding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Padding.p10,
  },
  flexJustPadding1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Padding.p16,
  },
  flexJustAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexJustPadTop24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
    backgroundColor: Color.white,
  },
  showBCTOtal: {
    paddingBottom: 24,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  showLessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  cancelOrderButton: {
    paddingVertical: Padding.p14,
  },
  widthMR: {
    width: 350,
    marginRight: 5,
  },
  flexGapDir: {
    flexDirection: 'row',
    gap: Gap.gap10,
    flexWrap: 'wrap',
  },
  flexGapDir8: {
    flexDirection: 'row',
    gap: Gap.gap8,
  },
  flexJustGap10: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Gap.gap10,
  },
  orderItemContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  orderItemPrescription: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  flexDirRow: {
    flexDirection: 'row',
  },
  flexBorGap: {
    flexDirection: 'row',
    borderRadius: Border.b4,
    gap: Gap.gap10,
  },
  BCOrderItemContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  proofOfDeliveryImageContainer: {
    gap: 24,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: Color.white,
  },
  cNotificationContainer: {
    paddingVertical: 16,
  },
  validation: {
    gap: 8,
  },
  scrollViewModal: {
    backgroundColor: Color.white,
    marginTop: Margin.m84,
  },
});
