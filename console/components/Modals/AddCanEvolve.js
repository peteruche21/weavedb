import { useState } from "react"
import { Box, Flex } from "@chakra-ui/react"
import { isNil } from "ramda"
import { inject } from "roidjs"
import { read, _setCanEvolve } from "../../lib/weavedb"

export default inject(
  ["loading", "temp_current", "tx_logs"],
  ({ state, contractTxId, db, setState, setAddCanEvolve, fn, set, $ }) => {
    return (
      <Flex
        w="100%"
        h="100%"
        position="fixed"
        sx={{ top: 0, left: 0, zIndex: 100, cursor: "pointer" }}
        bg="rgba(0,0,0,0.5)"
        onClick={() => setAddCanEvolve(false)}
        justify="center"
        align="center"
      >
        <Box
          bg="white"
          width="500px"
          p={3}
          fontSize="12px"
          sx={{ borderRadius: "5px", cursor: "default" }}
          onClick={e => e.stopPropagation()}
        >
          <Flex align="center" mb={3} justify="center">
            canEvolve is{" "}
            <Box
              as="span"
              ml={2}
              fontSize="20px"
              fontWeight="bold"
              color={state.canEvolve ? "#6441AF" : ""}
            >
              {state.canEvolve ? "ON" : "OFF"}
            </Box>
          </Flex>
          <Flex align="center">
            <Flex
              fontSize="12px"
              align="center"
              height="40px"
              bg="#333"
              color="white"
              justify="center"
              py={2}
              px={2}
              w="100%"
              onClick={async () => {
                if (isNil($.loading)) {
                  set("set_canevolve", "loading")
                  const res = await fn(_setCanEvolve)({
                    value: !state.canEvolve,
                    contractTxId,
                  })
                  if (/^Error:/.test(res)) {
                    alert("Something went wrong")
                  }
                  setState(await fn(read)({ db, m: "getInfo", q: [true] }))
                  set(null, "loading")
                }
              }}
              sx={{ cursor: "pointer", ":hover": { opacity: 0.75 } }}
            >
              {!isNil($.loading) ? (
                <Box as="i" className="fas fa-spin fa-circle-notch" />
              ) : (
                "Switch canEvolve"
              )}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    )
  }
)
