package types_test

import (
	"encoding/hex"
	"encoding/json"
	"testing"

	transfertypes "github.com/cosmos/ibc-go/v9/modules/apps/transfer/types"
	"github.com/cosmos/ibc-go/v9/modules/core/04-channel/v2/types"
	"github.com/stretchr/testify/require"
)

func TestCommitPacket(t *testing.T) {
	transferData, err := json.Marshal(transfertypes.FungibleTokenPacketData{
		Denom:    "uatom",
		Amount:   "1000000",
		Sender:   "sender",
		Receiver: "receiver",
		Memo:     "memo",
	})
	require.NoError(t, err)
	packet := types.Packet{
		Sequence:           1,
		SourceChannel:      "channel-0",
		DestinationChannel: "channel-1",
		TimeoutTimestamp:   100,
		Payloads: []types.Payload{
			{
				SourcePort:      transfertypes.PortID,
				DestinationPort: transfertypes.PortID,
				Version:         transfertypes.V1,
				Encoding:        "application/json",
				Value:           transferData,
			},
		},
	}
	commitment := types.CommitPacket(packet)
	require.Equal(t, "c75fb6745b83fe67fb01d11cc01de73f9203386cb20f5ae6102080ae07e28a24", hex.EncodeToString(commitment))
}
