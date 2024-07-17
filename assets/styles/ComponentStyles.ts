import {StyleSheet} from 'react-native';
import {
  Align,
  Border,
  Color,
  Flex,
  FlexDirection,
  Font,
  FontFamily,
  Gap,
  Height,
  LineHeight,
  Margin,
  Padding,
  Shadow,
  Width,
} from './GlobalStyles';

export const ComponentStyles = StyleSheet.create({
  formMainContainer: {
    paddingVertical: 24,
    gap: 16,
  },
  formContainer: {
    gap: 8,
    backgroundColor: Color.white,
  },
  formLabelText: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    fontSize: Font.fontSmall,
    color: Color.grey4,
  },
  formInputContainer: {
    height: 48,
    margin: 0,
  },
  formInputWithRightIconContainer: {
    height: 48,
    margin: 0,
    flex: 1,
    paddingRight: 24,
  },
  formInputRightIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    justifyContent: 'center',
    padding: 12,
  },

  formButtonBot: {
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    gap: Gap.gap10,
  },
  formButtonBot2: {
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    gap: Gap.gap10,
  },
  primaryButtonContainer: {
    borderRadius: 4,
    height: 44,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  primaryButtonTextContainer: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    color: Color.white,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },

  secondaryButtonContainer: {
    borderRadius: 4,
    backgroundColor: Color.secondaryButton,
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  secondaryButtonTextContainer: {
    color: Color.primary,
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '700',
  },

  secondaryButton32Container: {
    backgroundColor: Color.secondaryButton,
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    height: 32,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    flex: 1, // Adjust this if needed to allow buttons to share space evenly
    minWidth: 0,
  },
  secondaryButton32TextContainer: {
    color: Color.primary,
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontSmall,
    overflow: 'hidden',
    fontWeight: '700',
  },
  // CActivityItem
  activityItemContainer: {
    padding: Padding.p20,
    backgroundColor: Color.grey5,
    borderRadius: Border.b8,
    marginVertical: Margin.m8,
    flex: 1,
    flexDirection: 'row',
  },
  activityItemCenter: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  activityItemCenterStatusContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  activityItemCenterStatusLabel: {
    fontSize: Font.fontSmall,
    fontWeight: '700',
    paddingRight: 10,
  },
  activityItemCenterBranchLabel: {
    fontSize: Font.fontNormal,
    fontWeight: '500',
    paddingVertical: 8,
  },
  activityItemCenterCountDateLabel: {
    fontSize: Font.fontExtraSmall,
    fontWeight: '400',
    color: Color.placeholder,
  },
  activityItemCenterCountDateLabelContainer: {flex: 1, flexDirection: 'row'},
  rowValue: {
    fontSize: 17,
    fontWeight: '500',
    color: '#8B8B8B',
    marginRight: 4,
  },

  // CAddressItem
  addressItemContainer: {
    marginVertical: Margin.m8,
    paddingVertical: Padding.p16,
    paddingHorizontal: Padding.p20,
    borderRadius: 8,
    backgroundColor: Color.grey9,
  },
  addressTitleText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '500',
    lineHeight: 24,
  },
  addressDetailsContainer: {
    marginTop: Margin.m14,
    flexDirection: 'column',
  },
  addressDetailsText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontSmall,
    fontWeight: '400',
    lineHeight: 16,
    paddingLeft: Padding.p8,
  },

  // AccountScreen - Profile
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.grey7,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  profileDetailsContainer: {
    paddingVertical: 4.5,
    paddingLeft: 17,
    flex: 1,
    flexDirection: 'column',
  },
  profileAvatar: {
    width: 71,
    height: 71,
    borderRadius: 9999,
  },
  profileNameLabel: {
    fontSize: Font.fontLarge,
    fontWeight: '500',
    color: Color.black,
  },
  profileEditProfileTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileEditProfileButtonText: {
    color: Color.primary,
    fontSize: Font.fontNormal,
    fontWeight: '700',
    paddingLeft: 10,
  },
  profileRightArrowContainer: {
    justifyContent: 'center',
  },

  // Edit Profile
  profileFormAvatarContainer: {
    backgroundColor: Color.white,
    paddingTop: Padding.p16,
    paddingBottom: Padding.p14,
    marginVertical: Margin.m12,
    alignItems: 'center',
  },
  profileFormAvatar: {
    width: 100,
    height: 100,
    borderRadius: 9999,
    marginBottom: Margin.m19,
  },
  profileFormContainer: {
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p20,
  },
  profileFormInputContainer: {
    backgroundColor: Color.white,
    paddingTop: Padding.p16,
    paddingBottom: Padding.p12,
  },
  profileFormEditProfileTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileFormEditProfileInputLabel: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    fontSize: Font.fontSmall,
    color: Color.grey4,
    lineHeight: 16,
    paddingBottom: Padding.p8,
  },
  profileFormEditProfileButtonText: {
    color: Color.primary,
    fontSize: Font.fontNormal,
    fontWeight: '700',
    paddingLeft: 10,
  },

  rowIcon: {
    width: 30,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  sectionBody: {
    paddingLeft: 24,
  },
  buttonItemList: {
    borderRadius: 5,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  addItemButton: {
    height: 30,
    width: 73,
    padding: 0,
    backgroundColor: Color.primary,
  },
  mobileNo1: {
    width: '25%',
    height: 48,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 5,
    color: '#ccc',
    fontSize: Font.fontMediumLarge,
    borderRadius: 5,
    borderColor: Color.lightgrey,
    borderWidth: 1,
    paddingHorizontal: 10,
    shadowColor: Shadow.color,
    shadowOffset: Shadow.offset,
    shadowOpacity: Shadow.opacity,
    shadowRadius: Shadow.radius,
    elevation: Shadow.elevation,
  },
  button: {
    paddingVertical: 10,
    height: 55,
    backgroundColor: '#EBEBEB',
    borderWidth: 1,
    borderColor: '#285663',
    marginHorizontal: 16,
  },
  label: {
    fontSize: 16,
    color: Color.primary,
    fontWeight: 'bold',
  },

  buttonContainer: {
    paddingVertical: 16,
  },
  payNow: {
    height: 55,
    paddingTop: 16,
  },
  payNowContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.placeholder,
    borderRadius: 5,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  //Registration
  container: {
    flex: 1,
    padding: 5,
  },
  containerItemList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  registerText: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
  },
  policyTextButton: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  containerLabelStyle: {
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  labelStyle: {
    fontFamily: FontFamily.defaultFontBold,
    fontSize: 14,
    fontWeight: '500',
    color: '#2D7171',
  },
  //Code Validation
  text: {
    color: Color.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Font.fontNormal,
    alignSelf: 'center',
    padding: 10,
    lineHeight: LineHeight.lineHeight2,
  },
  //Rate Rider
  home: {
    alignItems: 'center',
  },
  //Order Detail (Prescription)
  removeButton: {
    position: 'absolute',
    backgroundColor: Color.lightgrey,
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //OrderDetailScreenStyles.buttonStyle
  addImageButton: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: Border.b4,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  //OrderDetailScreenStyles.iconStyle
  addImageButtonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectItemAddButton: {
    height: 32,
    width: 32,
    backgroundColor: Color.secondaryButton,
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: Border.b4,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  selectItemText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '500',
    lineHeight: 16,
    color: Color.black,
  },
  //CItemListStyles.container
  itemListComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  //CItemListStyles.leftContent
  itemListName: {
    flex: 1,
    paddingRight: 15,
  },
  //CItemListStyles.rightContent
  itemListQuantity: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  //CItemListStyles.quantityContainer
  itemListQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
  },
  //CItemListStyles.button
  itemListQuantityButton: {
    fontSize: 16,
    paddingHorizontal: 6,
    borderColor: '#888',
    borderRadius: 5,
    fontFamily: FontFamily.defaultFont,
  },
  imageContainer: {
    padding: 5,
    borderRadius: 8,
    margin: 5,
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
  },

  cheBoxContainer: {
    margin: 0,
    padding: 0,
  },
  checkBoxLabel: {
    marginHorizontal: -12,
    paddingVertical: 8,
  },
  //CAddress styles.container
  addressComponentContainer: {
    backgroundColor: 'white',
  },
  //CAddress styles.viewStyle
  addressComponentDetailContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  //CAddress styles.view
  addressComponentDetailContainer: {
    padding: 16,
  },

  input: {
    flex: 1,
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFont,
    textAlignVertical: 'center',
    backgroundColor: 'transparent',
    lineHeight: 24,
  },
  nameStyle: {
    flexDirection: 'row',
  },

  /* CItemlist */
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 15,
    paddingBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
    verticalAlign: 'middle',
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 84,
    height: 32,
  },

  quantityMainContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    backgroundColor: Color.white,
  },
  quantityMinusButton: {
    borderWidth: 1,
    borderBottomLeftRadius: Border.b2,
    borderTopLeftRadius: Border.b2,
    height: 32,
    width: 26,
    borderColor: Color.placeholder,
  },
  quantityPlusButton: {
    borderWidth: 1,
    borderBottomRightRadius: Border.b2,
    borderTopRightRadius: Border.b2,
    height: 32,
    width: 26,
    borderColor: Color.placeholder,
  },
  quantityValueContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 32,
    width: 32,
    borderColor: Color.placeholder,
    borderRadius: 1,
    justifyContent: 'center',
  },

  quantityTextValue: {
    fontSize: Font.fontSmall,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  addItemQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 124,
    height: 48,
  },

  addItemQuantityMainContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  addItemQuantityMinusButton: {
    borderWidth: 1,
    borderBottomLeftRadius: Border.b2,
    borderTopLeftRadius: Border.b2,
    height: 48,
    width: 40,
    borderColor: Color.placeholder,
  },
  addItemQuantityPlusButton: {
    borderWidth: 1,
    borderBottomRightRadius: Border.b2,
    borderTopRightRadius: Border.b2,
    height: 48,
    width: 40,
    borderColor: Color.placeholder,
  },
  addItemQuantityValueContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 48,
    width: 44,
    borderColor: Color.placeholder,
    borderRadius: 1,
    justifyContent: 'center',
  },

  addItemQuantityTextValue: {
    fontSize: Font.fontNormal,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    lineHeight: 18.4,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Color.black,
  },

  itemImage: {
    width: 48,
    height: 48,
  },
  name: {
    fontSize: 16,
    fontFamily: FontFamily.defaultFontBold,
  },
  medicineName: {
    fontSize: 14,
    fontFamily: FontFamily.defaultFont,
    color: Color.black,
    fontWeight: '500',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  description: {
    fontSize: 12,
    fontFamily: FontFamily.defaultFont,
  },
  quantity: {
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: FontFamily.defaultFont,
    color: '#285663',
  },
  textContainer: {
    paddingHorizontal: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#888',
    fontFamily: FontFamily.defaultFont,
  },
  addButtonText: {
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  itemModalInput: {
    borderColor: Color.placeholder,
    width: '100%',
    height: 48,
    flex: 1,
  },
  itemModalQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.placeholder,
    borderRadius: 2,
    height: 48,
    width: 120,
  },
  // textContainer: {
  //   paddingHorizontal: 6,
  //   borderLeftWidth: 1,
  //   borderRightWidth: 1,
  //   borderColor: '#888',
  //   fontFamily: FontFamily.defaultFont,
  // },
  itemModalButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: Color.black,
  },
  itemModalTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 48,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Color.placeholder,
    fontFamily: FontFamily.defaultFont,
  },
  itemModalQuantity: {
    fontSize: 16,
    marginHorizontal: 5,
    fontFamily: FontFamily.defaultFont,
    color: '#285663',
  },
  itemModalInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  /* CAddCustomItemModal */
  itemModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    elevation: 10,
    gap: 10,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: Color.primaryText,
    fontFamily: FontFamily.defaultFont,
  },
  closeButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: Color.primaryText,
    fontFamily: FontFamily.defaultFontBold,
  },

  /* CQuantityInput */
  buttonText: {
    fontSize: Font.fontMediumLarge,
    fontWeight: 'normal',
    color: Color.black,
  },

  /* CInput */
  cInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.placeholder,
    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    // shadowColor: Shadow.color,
    // shadowOffset: Shadow.offset,
    // shadowOpacity: Shadow.opacity,
    // shadowRadius: Shadow.radius,
    // elevation: Shadow.elevation,
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
  cInputInput: {
    flex: 1,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    fontSize: Font.fontNormal,
    color: Color.black,
    backgroundColor: 'white',
    lineHeight: 16,
  },

  /* CInput2 */
  cInput2Container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: Shadow.color,
    shadowOffset: Shadow.offset,
    shadowOpacity: Shadow.opacity,
    shadowRadius: Shadow.radius,
    elevation: Shadow.elevation,
  },

  /* CCardView */
  card: {
    backgroundColor: Color.lightgrey,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cCardViewName: {
    fontSize: 18,
    marginBottom: 8,
    fontFamily: FontFamily.defaultFontBold,
  },
  cCardViewdescription: {
    fontSize: 14,
    fontFamily: FontFamily.defaultFont,
  },
  cCardViewImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  cCardViewtextContainer: {
    flex: 1,
  },

  /* CDropdownButton */
  cDropdownButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // marginVertical: 1,
  },
  cDropdownButtonInput: {
    flex: 1,
    paddingHorizontal: Padding.p10,
    fontSize: Font.fontNormal,
    color: Color.black,
    backgroundColor: Color.white,
    borderRadius: 5,
  },
  cDropdownButtonButton: {
    padding: Padding.p10,
  },
  cDropdownButtonButtonText: {
    fontSize: Font.fontMediumLarge,
    fontWeight: 'normal',
    color: Color.black,
  },
  cDropdownButtonDropdown: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flex: 5,
    zIndex: 5,
  },

  /* CCardHomeView */
  cCardHomeViewCard: {
    backgroundColor: Color.white,
    borderRadius: Border.b12,
    padding: 32,
    flexDirection: 'row',
    gap: 10,
  },
  cCardHomeViewName: {
    fontSize: Font.fontSubTitle,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    textAlign: 'left',
    color: Color.primary,
    lineHeight: 32,
  },
  cCardHomeViewDescription: {
    fontSize: Font.fontExtraSmall,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    lineHeight: LineHeight.lineHeight3,
    color: Color.grey4,
  },
  cCardHomeViewImage: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  cCardHomeViewImageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cCardHomeViewTextContainer: {
    flex: 3,
    gap: 10,
  },
  /* CNotification */
  cNotificationLabelStyle: {
    fontSize: Font.fontLarge,
    fontFamily: FontFamily.defaultFontBold,
    color: Color.black,
  },
  cNotificationItemContainer: {
    marginHorizontal: 20,
    padding: Padding.p16,
    marginVertical: Margin.m8,
    backgroundColor: Color.white,
    minHeight: 116,
    borderRadius: 8,
  },
  cNotificationItemInsideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cNotificationItemDescriptionContainer: {
    marginRight: 10,
    flexDirection: 'column',
    gap: 10,
  },
  cNotificationTextExtraSmall: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontExtraSmall,
    fontWeight: '400',
    lineHeight: 16,
  },
  cNotificationTextExtraSmallPlaceholder: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontExtraSmall,
    fontWeight: '400',
    lineHeight: 16,
    color: Color.placeholder,
  },
  cNotificationTextExtraSmallPlaceholder1: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontExtraSmall,
    fontWeight: '400',
    lineHeight: 16,
    color: Color.placeholder,
  },

  /* CStatus */
  cStatusContainer: {
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  cStatusHeadingNumber: {
    fontFamily: FontFamily.defaultFont,
    fontSize: 14,
    color: Color.primary,
  },
  cStatusHeading: {
    fontFamily: FontFamily.defaultFontBold,
    fontSize: 20,
    fontWeight: '700',
    color: Color.black,
  },
  cStatusText: {
    fontFamily: FontFamily.defaultFont,
    color: Color.placeholder,
    fontSize: 14,
  },
  cStatusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barColored: {
    flex: 1,
    height: 11,
    backgroundColor: Color.primary,
    borderRadius: 5,
  },
  barPlain: {
    flex: 1,
    height: 11,
    borderRadius: 5,
    borderWidth: 1,
  },
  animatedBar: {
    flex: 1,
    height: 11,
    borderRadius: 5,
  },
  progress: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },

  /* CItems */
  cItemsContainer: {
    backgroundColor: 'white',
  },
  cItemsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 8,
    padding: 16,
  },
  cItemsItem: {
    flexDirection: 'row',
    paddingVertical: 4,
    fontSize: 16,
    color: '#4D4D4D',
    gap: 10,
  },
  cItemsItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cItemsLine: {
    marginTop: 8,
    borderWidth: 0.5,
    height: 0,
    marginHorizontal: 16,
  },
  cItemsBlack: {
    color: 'black',
  },
  cItemsButton: {
    height: 55,
    backgroundColor: '#EBEBEB',
    borderWidth: 1,
    borderColor: '#285663',
    paddingTop: 16,
  },
  cItemsLabel: {
    fontSize: 20,
    color: 'black',
  },
  cItemsButtonContainer: {
    paddingTop: 16,
  },
  cEditItemTextStyle: {
    fontSize: Font.fontSmall,
    color: Color.black,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    lineHeight: 20,
  },

  cEditItemQuantyTextStyle: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    lineHeight: 24,
  },

  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20,
  },

  cConfirmationModalContainer: {
    backgroundColor: Color.white,
    borderRadius: 4,
    padding: 24,
    gap: 24,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  cConfirmationModalTitle: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    fontSize: Font.fontLarge,
    lineHeight: 24,
    color: Color.black,
  },

  cConfirmationModalDescription: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    fontSize: Font.fontNormal,
    lineHeight: 16,
    color: Color.grey4,
  },

  cConfirmationModalButton: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    width: 256,
  },
  /* CSelectAddressModal */
  cSelectAddressModalModalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 160,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cSelectAddressModalContent: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
  },
  cSelectAddressNewAddressContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cSelectAddressNewAddressContentLabel: {
    flex: 1,
    textAlign: 'left',
  },
  cSelectAddressNewAddressContentDropdown: {
    flex: 1,
    textAlign: 'right',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  cSelectAddressOptionText: {
    fontSize: 18,
    color: '#007BFF',
    fontFamily: FontFamily.defaultFont,
  },
  cSelectAddressSaveButton: {
    paddingVertical: 15,
    alignItems: 'flex-end',
  },
  cSelectAddressSaveButtonText: {
    fontSize: 18,
    color: '#007BFF',
    fontFamily: FontFamily.defaultFontBold,
  },
  oilContainer: {
    alignItems: 'flex-start',
    backgroundColor: Color.grey7,
    padding: 16,
    borderRadius: Border.b4,
    gap: 8,
  },
  oilLeftContent: {
    flex: 1,
    alignSelf: 'flex-start',
    gap: 8,
  },
  oilName: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '500',
    lineHeight: 24,
  },

  oilDescription: {
    fontSize: Font.fontExtraSmall,
    color: Color.grey4,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    lineHeight: 16,
  },

  oilRemarks: {
    fontSize: Font.fontExtraSmall,
    color: Color.grey4,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    lineHeight: 16,
  },

  oilEditButton: {
    fontSize: Font.fontExtraSmall,
    color: Color.primary,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    lineHeight: 16,
  },

  oilEditButtonContainer: {
    position: 'absolute',
    right: 0,
    zIndex: 100,
    paddingTop: 16,
    paddingHorizontal: 16,
  },

  oilRightContent: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  oilQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.placeholder,
    borderRadius: 5,
  },
  oilButton: {
    fontSize: 16,
    paddingHorizontal: 6,
    borderColor: Color.placeholder,
    borderRadius: 5,
    fontFamily: FontFamily.defaultFont,
  },
  oilTextContainer: {
    paddingHorizontal: 6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Color.placeholder,
    fontFamily: FontFamily.defaultFont,
  },
  oilQuantity: {
    fontSize: 16,
    marginHorizontal: 5,
    fontFamily: FontFamily.defaultFont,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  secondaryButton: {
    backgroundColor: Color.secondaryButton,
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  prescriptionContainer: {
    justifyContent: 'space-between',
    backgroundColor: Color.grey7,
    padding: 16,
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: Border.b4,
    gap: 8,
  },
  secondaryButtonText: {
    color: Color.primary,
    fontFamily: FontFamily.defaultFontBold,
    fontSize: Font.fontNormal,
    fontWeight: '700',
  },
  secondaryButtonText2: {
    color: Color.primary,
    fontFamily: FontFamily.defaultFontBold,
    fontSize: Font.fontNormal,
  },
  secondaryButtonText3: {
    color: Color.primary,
    fontFamily: FontFamily.defaultFontBold,
    fontSize: Font.fontSmall,
    fontWeight: '700',
  },

  navigatorTabBar: {
    backgroundColor: Color.white,
    // elevation: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.25,
    // shadowRadius: 10,
    // borderTopWidth: 0,
    // paddingVertical: 0,
    height: 64,
  },
  navigatorLabel: {
    color: Color.primaryText,
    fontFamily: FontFamily.defaultFontBold,
  },
  navigatorIcon: {
    width: 30,
    height: 30,
  },
  oilQuantityMinusButton: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomLeftRadius: Border.b2,
    borderTopLeftRadius: Border.b2,
    height: 48,
    width: 40,
    borderColor: Color.placeholder,
  },
  addBioItem:{
    flex: Flex.flex1,
    justifyContent: Align.center,
    alignItems: Align.center,
  },
  addBioItem2:{
    flexDirection: FlexDirection.row, 
    gap: Gap.gap8
    
  },
  
  oilQuantityPlusButton: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: Border.b2,
    borderTopRightRadius: Border.b2,
    height: 48,
    width: 40,
    borderColor: Color.placeholder,
  },
  oilQuantityButton: {
    borderWidth: 1,
    height: 48,
    width: 40,
    borderColor: Color.placeholder,
  },
  fieldIcon: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  addCustomItemModalHeader: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 84,
    position: 'relative',
  },
  addCustomItemModalHeaderLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: Color.black,
  },
  addCustomItemModalContent: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    elevation: 5,
  },
  addCustomItemModalInput: {
    gap: 8,
  },
  addCustomItemModalButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    margin: 20,
    paddingBottom: 24,
    gap: 10,
  },

  radiobuttonChoiceLabel: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '500',
    paddingLeft: 19,
    lineHeight: 24,
    color: Color.black2,
  },
  radioButtonChoice: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: 'center',
  },
  radioButtonWrapper: {
    flexDirection: 'column',
    backgroundColor: Color.white,
    marginVertical: 8,
    borderRadius: Border.b4,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    backgroundColor: Color.white,
    borderColor: Color.white,
    borderRadius: 10,
  },
  radioButtonOuter: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.grey,
  },
  radioButtonOuterSelected: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.primary,
    backgroundColor: Color.primary,
  },
  radiobuttonText: {
    fontSize: Font.fontLarge,
    fontWeight: '700',
  },
  radioButtonIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  radioButtonContainer: {
    marginHorizontal: 20,
    marginVertical: 12,
  },

  radioButtonCTAContainer: {
    backgroundColor: Color.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  radioButtonCTAWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  paymentMethodSubTotalFeesContainer: {
    paddingVertical: Padding.p8,
  },
  paymentMethodSubTotalFeesTextContainer: {
    paddingVertical: Padding.p8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentMethodSubTotalFeesText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    color: Color.black,
    fontWeight: '400',
    lineHeight: 18.4,
  },
  paymentMethodTotalContainer: {
    paddingVertical: Padding.p16,
    marginVertical: Margin.m10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentMethodTotalText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    color: Color.black,
    fontWeight: '700',
    lineHeight: 24,
  },
  radioButtonCTA: {
    backgroundColor: '#2D7171',
    borderRadius: Border.b4,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  radioButtonCTAText: {
    fontSize: Font.fontNormal,
    fontWeight: '700',
    color: Color.white,
    lineHeight: 24,
  },
  birthday: {
    height: 48,
    borderRadius: 5,
    textAlign: 'left',
    padding: 12,
    borderColor: 'white',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  textBday: {
    fontSize: 16,
    fontWeight: '400',
    color: '#AEB3BC',
  },
  mobileNo: {
    width: '25%',
    height: 48,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 1,
    color: '#ccc',
    fontSize: Font.fontMediumLarge,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 0.2,
    paddingHorizontal: 10,
    shadowColor: Shadow.color,
    shadowOffset: Shadow.offset,
    shadowOpacity: Shadow.opacity,
    shadowRadius: Shadow.radius,
    elevation: Shadow.elevation,
  },

  viewImageButton: {
    backgroundColor: Color.primary,
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  viewImageButtonText: {
    color: Color.white,
    fontFamily: FontFamily.defaultFontBold,
    fontSize: Font.fontNormal,
    fontWeight: '700',
  },
  deleteImageButton: {
    backgroundColor: Color.grey3,
    borderWidth: Border.width.w1,
    borderColor: Color.red2,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  deleteImageButtonText: {
    color: Color.red2,
    fontFamily: FontFamily.defaultFontBold,
    fontSize: Font.fontNormal,
    fontWeight: '700',
  },
  addInfoButton: {
    backgroundColor: Color.secondaryButton,
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  addInfoButtonText: {
    color: Color.primary,
    fontFamily: FontFamily.defaultFontBold,
    fontSize: Font.fontMediumLarge,
  },
  cSelectDeliveryDetailsModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cSelectDeliveryDetailsModalContent: {
    backgroundColor: Color.grey5,
    height: '80%',
  },
  cSelectDeliveryDetailsModalHeader: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    height: 84,
    alignItems: 'center',
  },
  cSelectDeliveryDetailsModalHeaderlabel: {
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '700',
    fontSize: 20,
    color: Color.black,
    textAlign: 'center',
  },
  cSelectDeliveryDetailsModalHeaderLabelContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  cSelectDeliveryDetailsModalBody: {
    gap: 16,
  },
  cSelectDeliveryDetailsModalSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: Color.white,
    gap: 24,
  },
  cSelectDeliveryDetailsModalMainLabel: {
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '700',
    fontSize: Font.fontNormal,
    color: Color.black,
  },
  cSelectDeliveryDetailsModalInputContainer: {
    gap: 8,
  },
  cSelectDeliveryDetailsModalChildLabel: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    fontSize: Font.fontSmall,
    color: Color.grey4,
    lineHeight: 16,
  },
  cSelectDeliveryDetailsModalInput: {
    height: 48,
    margin: 0,
  },
  cSelectDeliveryDetailsModalInputNumber: {
    height: 48,
    width: 80,
    margin: 0,
  },

  cSelectDeliveryDetailsModalChevronDown: {
    position: 'absolute',
    right: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  cSelectDeliveryDetailsModalTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cSelectDeliveryDetailsModalTypeButton: {
    borderWidth: Border.width.w1,
    borderColor: Color.primary,
    height: 32,
    width: 77,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  cSelectDeliveryDetailsModalTypeText: {
    color: Color.primary,
    fontFamily: FontFamily.defaultFontBold,
    fontSize: Font.fontSmall,
  },

  cSelectDeliveryDetailsModalConfirm: {
    borderRadius: 4,
    height: 44,
    backgroundColor: Color.primary,
    marginVertical: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  cSelectDeliveryDetailsModalConfirmText: {
    fontSize: Font.fontNormal,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    color: Color.white,
  },
  cSelectMerchantContainer: {
    flex: 1,
  },
  cItemsItemTotalLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  successToast: {
    borderWidth: 1,
    borderColor: '#98C729',
    backgroundColor: '#F3FFD6',
    height: 90,
    width: '100%',
  },
  successText1: {
    fontSize: 20,
    fontWeight: '500',
    color: '#58790C',
    paddingHorizontal: 28,
    marginBottom: 10,
    height: 24,
  },
  successText2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#58790C',
    paddingHorizontal: 28,
  },
  errorToast: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'pink',
    height: 90,
    width: '100%',
  },
  errorText1: {
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
    paddingHorizontal: 28,
    marginBottom: 10,
    height: 24,
  },
  errorText2: {
    fontSize: 16,
    fontWeight: '400',
    color: 'red',
    paddingHorizontal: 28,
  },
  row: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 24,
  },

  // CSettingItem
  settingItemContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.white,
    paddingVertical: Padding.p8,
    marginVertical: Margin.m8,
  },
  settingItemRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  settingItemLabelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Padding.p10,
  },
  settingItemLabel: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '500',
    color: Color.grey4,
  },

  iconView: {zIndex: 100},
  safeArea: {
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: 'white',
    shadowColor: '#03153D',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  containerHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 16,
    height: 84,
  },
  titleContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  titleInputContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: FontFamily.defaultFont,
    fontSize: 24,
    fontWeight: '500',
    color: Color.black,
  },
  content: {
    marginTop: 10,
  },
  centerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  // bottom CTA button
  bottomCTAButtonContainer: {
    backgroundColor: Color.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomCTAButtonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  bottomCTAButton: {
    backgroundColor: '#2D7171',
    borderRadius: Border.b4,
    height: 44,
  },
  bottomCTAButtonText: {
    fontSize: Font.fontNormal,
    fontWeight: '700',
    color: Color.white,
    lineHeight: 24,
  },
  loginHeader: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    height: 84,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  loginContainer: {
    paddingVertical: 24,
    gap: 8,
  },
  loginLabel: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    fontSize: Font.fontSmall,
    color: Color.grey4,
  },
  loginInputNumber: {
    height: 48,
    width: 95,
    margin: 0,
  },

  loginInputNumberlChevronDown: {
    position: 'absolute',
    right: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  loginInput: {
    height: 48,
    margin: 0,
    flex: 1,
  },
  orderDetailsGifContainer: {
    height: 90,
    width: 90,
  },
  loadMoreContainer: {
    height: 30,
    width: 30,
  },
  deleteAccountHeadText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#4D545E',
  },
  deleteAccountText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#7B8493',
  },
  deleteAccountDeleteButton: {
    height: 44,
    backgroundColor: '#2D7171',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletePatientButton: {
    height: 44,
    backgroundColor: Color.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteAccountDeleteText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  deleteAccountCancelButton: {
    height: 44,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2D7171',
  },
  deleteAccountCancelText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D7171',
  },

  lineContainer: {
    alignItems: 'flex-start',
  },
  dottedLine: {
    height: 45,
    width: 2,
    borderLeftWidth: 1,
    borderColor: 'red',
    borderStyle: 'dashed',
  },

  // edit profile form - start
  uploadPictureContainer: {
    flexDirection: 'row',
  },
  uploadPictureLabel: {
    fontSize: Font.fontSmall,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    color: Color.solidBlack,
    marginRight: 8,
  },
  // edit profile form - end
  deliveRxAddressLabelContainer: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  deliveRxAddressLabel: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    lineHeight: 24,
    fontWeight: '400',
  },

  cAddDeliveryDetailsModalHeader: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    height: 84,
    alignItems: 'center',
    shadowColor: '#03153D',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },

  dropDownStyle: {
    borderWidth: Border.width.w1,
    borderRadius: Border.b5,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: 'white',
    // shadowColor: Shadow.color,
    // shadowOffset: Shadow.offset,
    // shadowOpacity: Shadow.opacity,
    // shadowRadius: Shadow.radius,
    // elevation: Shadow.elevation,
    height: 48,
    margin: 0,
    flex: 1,
  },
  dropDownSelectedStyle: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '500',
    lineHeight: 16,
    color: Color.black,
  },
  errorLabelText: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    color: Color.red,
    fontSize: Font.fontExtraSmall,
  },
  errorLabelContainer: {
    marginLeft: 5,
  },
  navigatorContainer: {
    gap: 3,
    flex: 1,
    width: 68,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  navigatorLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: Color.primary,
  },
  bottomNavigatorLabel: {
    fontFamily: FontFamily.defaultFontBold,
    fontSize: 10,
    textAlign: 'center',
  },
  deleteAccountModalContent: {
    backgroundColor: Color.white,
    height: '80%',
    elevation: 5,
    paddingHorizontal: 20,
  },
  deleteAccountModalBack: {
    position: 'absolute',
    left: 0,
  },
  deleteAccountModalText: {
    marginVertical: 24,
    gap: 24,
  },
  deleteAccountModalInputContainer: {
    gap: 8,
  },
  deleteAccountModalInput: {
    height: 48,
    borderRadius: 4,
  },
  cBCStatusHeadingContainer: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: Color.grey9,
    gap: 16,
  },

  cBCStatusHeading: {
    fontFamily: FontFamily.defaultFont,
    fontSize: 16,
    fontWeight: '700',
    color: Color.black,
    lineHeight: 24,
  },

  cBCStatusHeadingLink: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontExtraSmall,
    fontWeight: '400',
    color: Color.primary,
    lineHeight: 16,
  },

  cBCRouteButtonText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '700',
    color: Color.primary,
    lineHeight: 24,
  },

  cBCAddStopButtonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  cBCDocumentCheckContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  cBCPickUpIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'flex-start',
    width: 24,
    gap: 4,
  },

  cBCPickUpLocation: {
    paddingVertical: 16,
    paddingLeft: 4,
    borderRadius: 4,
    gap: Gap.gap12,
    //  height: 81,
    flex: 1,
    zIndex: 100,
  },

  cBCPickUpDocument: {
    fontSize: Font.fontSmall,
    color: Color.grey4,
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    lineHeight: 16,
  },
  cBCPickUpDocument1: {
  flexDirection: FlexDirection.row, 
  gap: Gap.gap8
  },
  cBCPickUpDocument2: {
  gap: 10, alignItems: Align.flexEnd
  },
  cItemModalRemarks:{
    width: Width.width40
  },
  cBCPickUpDocumentValue: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontNormal,
    fontWeight: '400',
    lineHeight: 24,
  },

  cBCPickUpAddressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  cBCPickUpContactDetailsText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontSmall,
    color: Color.grey4,
  },
  textSplashStyle: {
    fontWeight: '500',
    color: Color.grey2,
  },
  gapStyle10: {
    gap: 10,
  },
  gapStyle16: {
    gap: 16,
  },
  height16: {
    height: 16,
  },
  paddingStyle10: {
    padding: Padding.p10,
  },
  buttonZIndex: {
    zIndex: 100,
  },
  mapsContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  statusStyle: {
    position: 'absolute',
    top: -12,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 100,
  },
  statusButton: {
    borderRadius: 100,
    width: 30,
    height: 30,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  height70: {
    height: 70,
  },
  width8: {
    width: 8,
  },
  height8: {
    height: 8,
  },
  pickUpText: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontSmall,
    color: Color.grey4,
  },
  totalTextLabel: {
    fontFamily: FontFamily.defaultFontBold,
    color: Color.black,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  amountTextLabel: {
    fontFamily: FontFamily.defaultFontBold,
    color: Color.grey4,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  filterAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  pickUpTouchableView: {
    flex: 1,
    marginBottom: 8,
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdownList: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderColor: Color.lightgrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  cHeaderStyles: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  cIconButtonStyles: {
    position: 'relative',
  },
  cIconButtonNotif: {
    position: 'absolute',
    top: -2,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    height: 12,
    width: 12,
    paddingVertical: 2,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    width: 288,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 8,
  },
  exitIcon: {
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    right: 0,
    top: 0,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  completeGif: {
    height: 224,
    width: 211,
  },
  modalText: {
    fontWeight: '500',
    fontFamily: FontFamily.defaultFontMediumBold,
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: '#2A2E34',
  },
  textStyle: {
    fontFamily: FontFamily.defaultFont,
    color: '#AEB3BC',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
  cListStyles: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderColor: Color.lightgrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cLoadingStyles: {
    justifyContent: 'center',
    zIndex: 1000,
    alignItems: 'center',
  },
  deliveryDetailsContainer: {
    gap: 24,
  },
  deliveryDeets: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '700',
    backgroundColor: 'red',
  },
  cAddressContactInformationContainer: {
    justifyContent: 'space-between',
    gap: 16,
  },
  addressDeets: {
    fontWeight: '500',
    fontSize: Font.fontSmall,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    padding: 0,
    margin: 0,
  },
  deets: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontSmall,
    color: Color.grey4,
    padding: 0,
    margin: 0,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label1: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    flex: 1,
  },
  deliveryDetailsContainer1: {
    gap: 24,
  },
  deliveryDeets1: {
    fontSize: Font.fontNormal,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '700',
    backgroundColor: 'red',
  },
  cAddressContactInformationContainer1: {
    justifyContent: 'space-between',
    gap: 14,
  },
  addressDeets1: {
    fontWeight: '500',
    fontSize: Font.fontSmall,
    color: Color.black,
    fontFamily: FontFamily.defaultFontBold,
    padding: 0,
    margin: 0,
  },
  deets1: {
    fontFamily: FontFamily.defaultFont,
    fontSize: Font.fontSmall,
    color: Color.grey4,
    padding: 0,
    margin: 0,
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    gap: 4,
  },
  cDocumentFormItems: {
    position: 'absolute',
    right: 0,
    height: 44,
    width: 44,
    alignItems: 'flex-end',
    zIndex: 1000,
  },
  registerFormLabel: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    color: Color.grey4,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  registerFormButton: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    color: Color.grey4,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  loginSkip: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    color: Color.grey4,
    fontSize: Font.fontNormal,
    textAlign: Align.center,
    lineHeight: 24,
  },
  loginMobileButton: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    color: Color.primary,
    fontSize: Font.fontNormal,
    textAlign: Align.center,
    lineHeight: 24,
  },
  loginFormWelcome: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '500',
    color: Color.primary,
    fontSize: Font.fontHuge,
    lineHeight: 32,
  },
  loginDescription: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    color: Color.black,
    fontSize: Font.fontNormal,
    textAlign: Align.center,
    lineHeight: 24,
  },
  toast: {
    position: 'absolute',
    backgroundColor: Color.red,
    borderColor: Color.red2,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 28,
    paddingVertical: 16,
    marginHorizontal: 20,
    top: 16,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  toast1: {
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  toastLabel: {
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '500',
    fontSize: Font.fontLarge,
    color: Color.white,
    lineHeight: 24,
  },
  toastLabel1: {
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '400',
    fontSize: Font.fontSmall,
    color: Color.white,
    marginLeft: 35,
    lineHeight: 24,
  },
  successToast1: {
    position: 'absolute',
    backgroundColor: Color.yellow1,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 80,
    zIndex: 10000,
  },
  successToastLabel: {
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '400',
    fontSize: Font.fontExtraSmall,
    color: Color.yellow3,
    lineHeight: 24,
  },
  changePassLabel1: {
    fontFamily: FontFamily.defaultFontBold,
    fontWeight: '700',
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  loginFieldContainer: {
    gap: 8,
  },
  login: {
    height: '100%',
    gap: 24,
  },
  loginLogo: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginMobileContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  loginFlex: {
    flexDirection: 'row',
  },
  loginTextButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    alignItems: 'center',
  },
  loginText: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '400',
    color: Color.grey4,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  loginTextButton: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    color: Color.primary,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    gap: 10,
  },
  pButton: {
    borderRadius: 4,
    height: 44,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pLabel: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    color: Color.white,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  sButton: {
    borderRadius: 4,
    height: 44,
    backgroundColor: Color.secondaryButton,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderBlockColor: Color.primary,
    borderWidth: 1,
  },
  sLabel: {
    fontFamily: FontFamily.defaultFont,
    fontWeight: '700',
    color: Color.primary,
    fontSize: Font.fontNormal,
    lineHeight: 24,
  },
  alignCenter: {
    alignItems: 'center',
  },
  verificationText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#7B8493',
    textAlign: 'center',
  },
  invalidCode: {
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  cItemDetailsModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cItemDetailsModalContent: {
    backgroundColor: Color.grey5,
    height: '60%',
  },

  cItemDetailsQty: {
    borderWidth: Border.b1,
    borderColor: Color.placeholder,
    borderRadius: Border.b4,
    padding: Padding.p4,
    height: 28,
  },
  cItemModal:{
    gap: 10
  },
  cOrderHeading: {
    fontFamily: FontFamily.defaultFont,
    fontSize: 16,
    fontWeight: '700',
    color: Color.black,
    lineHeight: 18,
  },
  cGuideContainer: {
    paddingVertical: 16,
    paddingLeft: 4,
    borderRadius: 4,
    gap: Gap.gap12,
    //  height: 81,
    flex: 1,
    zIndex: 100,
  },
  cGuideIcons: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 14,
  },
  cGuideLabelContainer: {
    flex: 1,
    gap: 16,
  },
  CHeaderIcon: {
    zIndex: 100,
  },
  otpInputStyle: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderColor: '#808080',
  },
  gap: {
    gap: 16,
  },
  textLabelStyle: {
    fontWeight: '400',
    fontSize: 16,
    color: '#7B8493',
  },
  boldFont: {
    fontWeight: '700',
  },
  width70: {
    width: '70%',
  },
  numericInput: {
    height: 48,
    margin: 0,
  },
  loginForm:{
     gap: Gap.gap24, 
     alignItems: Align.center, 
     justifyContent: Align.spaceBetween, 
     flex: Flex.flex1, 
     height: Height.height100
    },
  loginScrollView:{
    marginBottom: Margin.m120 
  },
  LoginForm2:{
    alignItems: Align.center
  },
  loginForm3:{
    gap: Gap.gap24, 
    alignItems: Align.center,
  },
  loginWithEmail:{
    alignContent: Align.center,
    alignItems: Align.center,
    justifyContent: Align.center,
},
signUp1:{
  flexDirection: FlexDirection.row, 
  gap: Gap.gap14
},
signUp2:{
  flexDirection: FlexDirection.row
},
signUp3:{
  width: Width.width95
},
signUpMember:{
  flexDirection: FlexDirection.row, 
  gap: Gap.gap4
},

addBioCourierItem:{
  flexDirection: FlexDirection.row,
  width: Width.width100,
  flex: Flex.flex1,
},
cButton:{
  flexDirection: FlexDirection.row,
  borderRadius: Border.b4,
  gap: Gap.gap10,
},

cOrderItemList:{
  flexDirection: FlexDirection.row, 
  gap: Gap.gap10, 
  flex: Flex.flex1 
},
cOrderItemList1:{
  gap: Gap.gap8, 
  flex: Flex.flex1
},
cOrderItemList2:{
  flexDirection: FlexDirection.row, 
  gap: Gap.gap8
},
cDocumentFormItems1:{
  flex: Flex.flex1,
  paddingTop: Padding.p24,
  paddingHorizontal: Padding.p20,
  zIndex: 0,
},
cDocumentFormItems2:{
  gap: Gap.gap16
},
cDocumentFormItems3:{
  flexDirection: FlexDirection.row, 
  columnGap: Gap.gap16
},
cMedicalList:{
  flexDirection: FlexDirection.row, 
  columnGap: Gap.gap32 
},
cAddress:{
  flexDirection: FlexDirection.row, 
  columnGap: Gap.gap32 
},
bCItemForm:{
  backgroundColor: Color.grey5, 
  gap: Gap.gap16
},
bCMedicalSelection:{
  paddingVertical: Padding.p24,
  paddingHorizontal: Padding.p20,
  borderRadius: Border.b8,
  backgroundColor: Color.grey5,
},
bCGuide:{
  flex: Flex.flex1, 
  gap: Gap.gap16 
}
}

);
