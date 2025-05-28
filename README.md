# Lab8-Starter

Service workers and graceful degradation are related in the context of Progressive Web Apps. Their relation shows through the handling of the web app of this lab as we implement a recipe viewing application that works both online and offline. The application demonstrates graceful degradation through its layered approach to functionality. With service workers, the web app caches recipes providing access if offline and faster load times through cached resources. This follows graceful degradation by starting with a basic web app that works in all browsers through network requests and localStorage. When service workers are supported, the app enhances the experience with offline capabilities, but if not supported, it falls back to basic features. This ensures users get the best experience their browser can support while maintaining core functionality.

Nelson Chen
