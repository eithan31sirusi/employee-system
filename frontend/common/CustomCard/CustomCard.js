import React from "react";

import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  CustomCardWrapper,
  EmployeeImage,
  EmployeeDetails,
  EmployeeName,
  DetailContainer,
  Detail,
  DetailText,
  DetaiStartingDate,
  DrawerButton,
} from "./CustomCard.styles";

const CustomCard = () => {
  return (
    <CustomCardWrapper>
      <EmployeeImage source={require("../../assets/images/Avatar.png")} />
      <EmployeeDetails>
        <EmployeeName> Employee Name </EmployeeName>
        <DetailContainer>
          <SimpleLineIcons name="phone" size={24} color="black" />
          <Detail>
            <DetailText> Position </DetailText>
            <DetaiStartingDate>Starting Date: Date</DetaiStartingDate>
          </Detail>
        </DetailContainer>
        <DetailContainer>
          <SimpleLineIcons name="phone" size={24} color="black" />
          <Detail>
            <DetailText> Position </DetailText>
          </Detail>
        </DetailContainer>
        <DetailContainer>
          <SimpleLineIcons name="phone" size={24} color="black" />
          <Detail>
            <DetailText> Position </DetailText>
          </Detail>
        </DetailContainer>
      </EmployeeDetails>
      <DrawerButton>
        <MaterialCommunityIcons name="more" size={30} color="black" />
      </DrawerButton>
    </CustomCardWrapper>
  );
};

export default CustomCard;
