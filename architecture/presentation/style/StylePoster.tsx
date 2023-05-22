import { StyleSheet } from "react-native";

export const StylePoster = StyleSheet.create({

    carouselStyle: {
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    posterStyle: {
        flex: 1,
        alignItems: "center",
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        display: "flex",
        marginTop: 16,
    },
    subTittleStyle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#878787",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10
    }
})