import React, { useState } from "react";
import {
  Div,
  Item,
  ItemDetails,
  Icon,
  Title
} from "./BookingInfoDialogueStyles";
import NumberSelector from "../NumberSelector/NumberSelector";
import { IOSSwitch } from "./IOSSwitch";

export default function BookingInfoDialogue({ booking, bookingUpdated, id, className }) {
  const [passengers, setPassengers] = useState(booking.passengers);
  const [luggage, setLuggage] = useState(booking.luggage);
  const [pets, setPets] = useState(booking.pets);
  const [nonSmoking, setNonSmoking] = useState(booking.nonSmoking);

  return (
    <Div id={id} className={className}>
      <Item>
        <ItemDetails>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="user"
              width="15.6"
              height="15.6"
              viewBox="0 0 20.885 27.14"
            >
              <g fill="#00c3e1" id="Group_90" transform="translate(0 16.433)">
                <path
                  id="Path_697"
                  d="M78.825 320.708a1.06 1.06 0 0 1-1.06-1.06 7.536 7.536 0 0 0-7.527-7.527h-1.59a7.536 7.536 0 0 0-7.527 7.527 1.06 1.06 0 1 1-2.12 0A9.658 9.658 0 0 1 68.647 310h1.59a9.658 9.658 0 0 1 9.647 9.647 1.06 1.06 0 0 1-1.059 1.061z"
                  transform="translate(-59 -310)"
                />
              </g>
              <g fill="#00c3e1" id="Group_91" transform="translate(3.18)">
                <path
                  id="Path_698"
                  d="M126.156 14.312a7.156 7.156 0 1 1 7.156-7.156 7.164 7.164 0 0 1-7.156 7.156zm0-12.192a5.036 5.036 0 1 0 5.036 5.036 5.041 5.041 0 0 0-5.036-5.036z"
                  transform="translate(-119)"
                />
              </g>
            </svg>
          </Icon>
          <Title>Passengers</Title>
        </ItemDetails>
        <div>
          <NumberSelector
            value={passengers}
            min="1"
            max="10"
            valueUpdated={(val) => {
              setPassengers(val);
              bookingUpdated({ passengers: val })
            }}
          />
        </div>
      </Item>

      <Item>
        <ItemDetails>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="briefcase"
              width="15.6"
              height="15.6"
              viewBox="0 0 27.774 27.828"
            >
              <g
                fill="#00c3e1"
                id="Group_110"
                transform="translate(11.979 12.183)"
              >
                <ellipse
                  id="Ellipse_33"
                  cx="1.358"
                  cy="1.354"
                  className="cls-1"
                  rx="1.358"
                  ry="1.354"
                  transform="translate(0 1.923) rotate(-45.04)"
                />
              </g>
              <g fill="#00c3e1" id="Group_111" transform="translate(0 6.998)">
                <path
                  id="Path_706"
                  d="M21.765 149.831H7.01a6.517 6.517 0 0 1-6.51-6.51v-7.811A6.517 6.517 0 0 1 7.01 129h14.755a6.517 6.517 0 0 1 6.51 6.51v7.811a6.517 6.517 0 0 1-6.51 6.51zM7.01 131.17a4.345 4.345 0 0 0-4.34 4.34v7.811a4.345 4.345 0 0 0 4.34 4.34h14.755a4.345 4.345 0 0 0 4.34-4.34v-7.811a4.345 4.345 0 0 0-4.34-4.34z"
                  className="cls-1"
                  transform="translate(-0.5 -129)"
                />
              </g>
              <g
                fill="#00c3e1"
                id="Group_112"
                transform="translate(5.316 13.507)"
              >
                <path
                  id="Path_707"
                  d="M109.729 256h-5.316a5.92 5.92 0 0 1-5.913-5.913 1.085 1.085 0 1 1 2.17 0 3.747 3.747 0 0 0 3.743 3.743h5.316a3.747 3.747 0 0 0 3.743-3.743 1.085 1.085 0 0 1 2.17 0 5.92 5.92 0 0 1-5.913 5.913z"
                  className="cls-1"
                  transform="translate(-98.5 -249)"
                />
              </g>
              <g fill="#00c3e1" id="Group_113" transform="translate(8.734)">
                <path
                  id="Path_708"
                  d="M170.722 4.828a1.085 1.085 0 0 1-1.085-1.085 1.575 1.575 0 0 0-1.573-1.573h-2.821a1.575 1.575 0 0 0-1.573 1.573 1.085 1.085 0 0 1-2.17 0A3.747 3.747 0 0 1 165.243 0h2.821a3.747 3.747 0 0 1 3.743 3.743 1.085 1.085 0 0 1-1.085 1.085z"
                  className="cls-1"
                  transform="translate(-161.5)"
                />
              </g>
            </svg>
          </Icon>
          <Title>Luggage</Title>
        </ItemDetails>
        <div>
          <NumberSelector
            value={luggage}
            min="1"
            max="10"
            valueUpdated={(val) => {
              setLuggage(val)
              bookingUpdated({ luggage: val })
            }}
          />
        </div>
      </Item>

      <Item>
        <ItemDetails>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.6"
              height="15.6"
              viewBox="0 0 27.827 27.851"
            >
              <path
                fill="#00c3e1"
                d="M3.493 8.6c-3.89.692-4.176 5.7-1.571 8.044a3.732 3.732 0 0 0 3.125.985A3.632 3.632 0 0 0 7.391 16.1c2.153-3.039.138-8.213-3.9-7.5zm2.122 6.246a1.477 1.477 0 0 1-.935.638c-.976.167-2-.871-2.243-2.266a2.355 2.355 0 0 1 .3-1.79 1.678 1.678 0 0 1 1.118-.684c1.094-.187 1.946.545 2.173 1.863a3.056 3.056 0 0 1-.418 2.239zM22.7 4.834c.256-2.545-1.21-4.568-3.489-4.811A3.783 3.783 0 0 0 16.4.84c-2.737 2.168-1.9 7.939 1.858 8.386 2.423.232 4.224-2.017 4.442-4.392zm-2.164-.221a3.139 3.139 0 0 1-1.024 2.1 1.4 1.4 0 0 1-1.015.346c-.965-.1-1.657-1.4-1.511-2.839.116-1.2.82-2.153 2-2.038 1.065.114 1.689 1.089 1.553 2.428zM12.028.842A3.791 3.791 0 0 0 9.216.023c-4.074.415-4.563 6.05-1.673 8.382a3.555 3.555 0 0 0 2.622.821c3.765-.447 4.6-6.215 1.862-8.385zM9.935 7.063a1.409 1.409 0 0 1-1.021-.348 3.138 3.138 0 0 1-1.025-2.1c-.137-1.34.489-2.315 1.557-2.429 2.654-.25 2.554 4.636.489 4.877zM27.3 10.115a3.861 3.861 0 0 0-2.528-1.572 4.068 4.068 0 0 0-4.684 3.638 5.2 5.2 0 0 0 .786 3.864 3.632 3.632 0 0 0 2.345 1.527 3.732 3.732 0 0 0 3.125-.985c1.7-1.461 2.318-4.645.956-6.472zm-1.472 3.046c-.223 1.3-1.126 2.284-2.035 2.283a1.236 1.236 0 0 1-.208-.018 1.477 1.477 0 0 1-.935-.638 3.055 3.055 0 0 1-.418-2.239c.228-1.318 1.079-2.05 2.173-1.863a1.678 1.678 0 0 1 1.118.684 2.355 2.355 0 0 1 .3 1.79zM14.243 27.845h-.005c-4.037.053-8.358-.118-8.37-4.274.178-3 4.121-11.783 8.321-11.824 4.182.032 8.138 8.849 8.321 11.824a3.9 3.9 0 0 1-.785 2.493c-1.638 1.92-4.462 1.727-7.481 1.781zm-.054-13.922c-1 0-2.547 1.584-3.947 4.036a17.153 17.153 0 0 0-2.2 5.612c0 1.795 1.547 2.1 6.2 2.1s6.094-.29 6.094-2.1a17.27 17.27 0 0 0-2.2-5.593c-.92-1.578-2.462-3.92-3.946-4.055z"
                transform="translate(-0.222 0)"
              />
            </svg>
          </Icon>
          <Title>Brining Pets</Title>
        </ItemDetails>
        <div>
          <IOSSwitch checked={pets} 
            onClick={() => {
              setPets(!pets)
              bookingUpdated({ pets: !pets })
            }}
            inputProps={{ 'aria-label': 'Switch Bringin Pets' }} />
        </div>
      </Item>

      <Item>
        <ItemDetails>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="15.6" height="15.6" viewBox="0 0 30.015 30.015">
              <g id="Group_519" transform="translate(1.414 1.277)">
                  <path fill="none" stroke="#00c3e1" strokeLinecap="round" strokeWidth="2px" id="Path_762" d="M2472.1-2583.984l27.187 27.187" transform="translate(-2472.102 2584.121)"/>
                  <path fill="none" stroke="#00c3e1" strokeLinecap="round" strokeWidth="2px" strokeLinejoin="round" id="Path_763" d="M2490.933-2359.372h-9.223a2.972 2.972 0 0 0-3.2 3.2 2.992 2.992 0 0 0 3.2 3.2h23.6v-6.4h-8.745" transform="translate(-2478.143 2372.35)"/>
                  <path fill="none" stroke="#00c3e1" strokeLinecap="round" strokeWidth="2px" id="Path_764" d="M2621.708-2305.072v-2.938" transform="translate(-2613.156 2324.454)"/>
                  <path fill="none" stroke="#00c3e1" strokeLinecap="round" strokeWidth="2px" id="Path_765" d="M2705.879-2552.251s-.329 3.39.933 5.064" transform="translate(-2692.48 2554.202)"/>
                  <path fill="none" stroke="#00c3e1" strokeLinecap="round" strokeWidth="2px" strokeLinejoin="round" id="Path_766" d="M2793.664-2584.037s.428 2.32-2.32 2.32-2.32-2.32-2.32-2.32a2.129 2.129 0 0 0-2.347-2.348 2.13 2.13 0 0 0-2.348 2.348s-.21 6.6 7.016 7.02" transform="translate(-2766.477 2586.385)"/>
              </g>
          </svg>
          </Icon>
          <Title>Non-Smoking</Title>
        </ItemDetails>
        <div>
          <IOSSwitch
            checked={nonSmoking}
            onClick={() => {
              setNonSmoking(!nonSmoking)
              bookingUpdated({ nonSmoking: !nonSmoking })
            }}
            inputProps={{ 'aria-label': 'Switch Non-Smooking' }}
          />
        </div>
      </Item>
    </Div>
  );
}
