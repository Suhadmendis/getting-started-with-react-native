import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

const Color = (props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>
        {props.color} Color ({count})
      </Text>

      <TouchableOpacity
        onPress={() => {
            console.log(count);

            let currentCount = count;
            ++currentCount;

            setCount(currentCount);
        }}
        activeOpacity={0.9}
        style={{
            width: 200,
            height: 50,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            borderRadius: 10
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
        }}>Increasing by 1</Text>
      </TouchableOpacity>
    </>
  );
};

const Cat = () => {
  return (
    <>
      <Text>Cat</Text>
      <Color color="Red" />
    </>
  );
};

export default Cat;
