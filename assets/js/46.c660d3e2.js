(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{398:function(e,t,o){"use strict";o.r(t);var s=o(42),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"a-replication-protocol-with-batching-on-top-of-libp2p-streams"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-replication-protocol-with-batching-on-top-of-libp2p-streams"}},[e._v("#")]),e._v(" A replication protocol with batching on top of libp2p streams")]),e._v(" "),o("p",[e._v("There were lots of discussions about the "),o("a",{attrs:{href:"https://github.com/ipld/specs/blob/15f1dae2de3708953d6bb0f117fdc4648854ca16/graphsync/graphsync.md#network-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graphsync wire protocol"),o("OutboundLink")],1),e._v(". Sometimes it wasn't clear on which level we'd like to operate. Should it be a protocol for a lower TCP-like level of networking, or rather higher level built on top of libp2p streams?")]),e._v(" "),o("p",[e._v("This led to the main point of the discussion which was about how to implement certain batching mechanisms and whether those should be part of the wire protocol itself or not.")]),e._v(" "),o("p",[e._v("I was arguing for keeping the protocol simple and doing those optimizations on a different layer. In the end we decided to bake it directly into the wire protocol.")]),e._v(" "),o("p",[e._v("Nonetheless I like to publish the thoughts I had on how it could be implemented on top of libp2p as I spent so much time on it and don't want to see those ideas just fade away into void. Perhaps it's useful for someone else or even future protocols we develop.")]),e._v(" "),o("h2",{attrs:{id:"current-graphsync-wire-protocol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#current-graphsync-wire-protocol"}},[e._v("#")]),e._v(" Current Graphsync wire protocol")]),e._v(" "),o("p",[e._v("The basic idea of the current Graphsync protocol is that you send some request and get multiple blocks back. Multiple responses of multiple requests might be put into a single message. I see two reasons for doing this:")]),e._v(" "),o("ul",[o("li",[e._v("Block de-duplication: If several responses contain the same blocks, those can be de-duplicated when sent over the wire.")]),e._v(" "),o("li",[e._v("Latency/bandwidth trade-off: If the connection between peers has a high latency, but there's still bandwidth available, you could bundle the responses to make better use of the resources.")])]),e._v(" "),o("h2",{attrs:{id:"building-on-top-of-libp2p"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-on-top-of-libp2p"}},[e._v("#")]),e._v(" Building on top of libp2p")]),e._v(" "),o("p",[e._v("I think it would be a huge win for the libp2p ecosystem if we find a way to build protocol independent batching capabilities on top of libp2p. New protocols would become easier to implement, but there would still be ways to optimize for different scenarios where batching makes sense.")]),e._v(" "),o("h3",{attrs:{id:"batching-responses-of-a-single-request"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#batching-responses-of-a-single-request"}},[e._v("#")]),e._v(" Batching responses of a single request")]),e._v(" "),o("p",[e._v("libp2p already supports multiplexing, which simplifies the code on the receiving side a lot. How nice would it be if the protocol specific code would only need to deal with single messages, even if they are sent in batches? The sender side would call a library to create batches, the receiving side then splits them into individual ones. This way the protocol specific code to handle messages would only need to deal with single messages.")]),e._v(" "),o("h3",{attrs:{id:"de-duplicating-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#de-duplicating-blocks"}},[e._v("#")]),e._v(" De-duplicating blocks")]),e._v(" "),o("p",[e._v('De-duplicating blocks is a superset of the "'),o("a",{attrs:{href:"#batching-responses-of-a-single-request"}},[e._v("batching responses of a single request")]),e._v("\" problem. I could imagine that you would write a protocol specific function for assembling and disassembling batches. The advantage over doing it directly on the protocol level would be that you won't need to deal with the disassembling/de-muxing in detail, but on a more abstract level.")]),e._v(" "),o("p",[e._v("This mechanism could also be used for bundling several responses in one message.")]),e._v(" "),o("h2",{attrs:{id:"author"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[e._v("#")]),e._v(" Author")]),e._v(" "),o("p",[e._v("@vmx (Volker Mische)")])])}),[],!1,null,null,null);t.default=i.exports}}]);