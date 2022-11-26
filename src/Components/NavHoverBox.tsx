import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon
} from '@chakra-ui/react'

type NavHoverBoxProps = {
  title: string;
  description: string;
  icon: string;
}

export default function NavHoverBox({ title, description, icon }: NavHoverBoxProps) {
    return (
        <>
            <Flex
                pos="absolute"
                bg="red"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
            />
            
        </>
    )
}
