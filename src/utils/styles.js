import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  myAccount: {
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "NotoSansJP-Regular",
  },
  input: {
    borderBottomColor: "#243684",
    borderBottomWidth: 1,
    width: 200,
    color: "#243684",
    fontFamily: "NotoSansJP-Regular",
  },
  inputError: {
    color: "red",
  },
  items: {
    marginTop: 20,
    fontFamily: "NotoSansJP-Regular",
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "white",
    fontFamily: "NotoSansJP-Regular",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    padding: 30,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "NotoSansJP-Regular",
  },
  modalMessage: {
    fontSize: 18,
    fontFamily: "NotoSansJP-Regular",
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "NotoSansJP-Regular",
  },
  modalSubitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "NotoSansJP-Regular",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuBar: {
    padding: 10,
    backgroundColor: "red",
    fontFamily: "NotoSansJP-Regular",
  },
  btnAdd: {
    fontFamily: "NotoSansJP-Regular",
  },
  total: {
    backgroundColor: "teal",
  },
  textItem: {
    fontFamily: "NotoSansJP-Regular",
  },
  textTotal: {
    fontFamily: "NotoSansJP-Regular",
    color: "white",
  },
  titleSections: {
    fontFamily: "NotoSansJP-Regular",
    color: "teal",
    fontSize: 20,
    paddingVertical: 0,
    marginBottom: 20,
    borderBottomColor: "teal",
    borderBottomWidth: 1,
  },
});
