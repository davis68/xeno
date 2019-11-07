/+  *server, primes, digits
/=  tile-js
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/xeno/js/tile
  /|  /js/
      /~  ~
  ==
=,  format
|%
+$  move  (pair bone card)
+$  poke
  $%  [%launch-action [@tas path @t]]
      [%helm-hi @t]
  ==
+$  card
  $%  [%poke wire dock poke]
      [%http-response =http-event:http]
      [%connect wire binding:eyre term]
      [%diff %json json]
      [%wait path @da]
  ==
--
=|  notelist=(list *)
|_  [bol=bowl:gall ~]
++  this  .
++  bound
  |=  [wir=wire success=? binding=binding:eyre]
  ^-  (quip move _this)
  [~ this]
++  prep
  |=  old=(unit ~)
  ~&  'X E N O T A T I O N   L A U N C H E D'
  ^-  (quip move _this)
  =/  launcha
    [%launch-action [%xeno /xenotile '/~xeno/js/tile.js']]
  :_  this
  :~
    [ost.bol %connect / [~ /'~xeno'] %xeno]
    [ost.bol %poke /xeno [our.bol %launch] launcha]
  ==
++  peer-xenotile
  |=  pax=path
  ^-  (quip move _this)
  =/  jon=json
  %-  pairs:enjs:format
  :~
    [%xeno `json`s+'·']
  ==
  [[ost.bol %diff %json jon]~ this]
++  send-tile-diff
  |=  jon=json
  ^-  (list move)
  %+  turn  (prey:pubsub:userlib /xenotile bol)
  |=  [=bone ^]
  ~&  jon
  [bone %diff %json jon]
++  send-status-diff
  |=  msg=tape
  ~&  `json`s+(crip msg)
  %-  send-tile-diff
  %-  pairs:enjs:format
  :~
    [%xeno `json`s+(crip msg)]
  ==
  ::[ost.bol %poke /xeno [our.bol %xeno] `json`s+(crip msg)]
++  poke-json
  |=  jon=json
  =/  json-map    ((om:dejs:format same) jon)
  =+  [stub=(~(got by json-map) %xeno)]
  =+  [n=(ni:dejs:format stub)]
  =+  [factors=(prime-factors:primes n)]
  =+  [x=(xenotate:primes n)]
  (send-status-diff x)
++  poke-handle-http-request
  %-  (require-authorization:app ost.bol move .)
  |=  =inbound-request:eyre
  ^-  (quip move _this)
  =/  request-line  (parse-request-line url.request.inbound-request)
  =/  back-path  (flop site.request-line)
  =/  name=@t
    =/  back-path  (flop site.request-line)
    ?~  back-path
      ''
    i.back-path
  ?~  back-path
    [[ost.bol %http-response not-found:app]~ this]
  ?:  =(name 'tile')
    [[ost.bol %http-response (js-response:app tile-js)]~ this]
  [[ost.bol %http-response not-found:app]~ this]
--
