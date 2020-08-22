# chess-watch-frontend

## How to use

### Download and install NodeJS

### After install run: `npm install`

### Change to directory cwf: `cd cwf/`

### Then run: `ng serve --open`

## Web app opens in a new browser tab

---

## Websocket Protocol

Protocol Messages:

      type  := [ BEGIN, END, NEW, PUSH ]

      BEGIN := 'BEGIN'
      END   := 'END'
      NEW   := 'NEW' ID
      PUSH  := 'PUSH' <ID>
      ID    := 16 byte string

## Dev notes

### Socket on port 11167 / 8765
