import React from "react"
import { Text, View } from "react-native"

type Props = {
  note: string,
}

export function Notes({ note }){
  return(
    <View>
      <Text>{note}</Text>
    </View>
  )
}