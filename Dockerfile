# FROM iojs:slim

# ADD sail_with_kingstuffy /sail_with_kingstuffy
# CMD ["/app/app.js", "--no-daemon"]
# RUN mkdir /server

# WORKDIR ../ /sail_with_kingstuffy

FROM node:0.12.3

RUN mkdir /sail_with_kingstuffy

WORKDIR /sail_with_kingstuffy

# the dependencies are already installed in the local copy of the project, so 
# they will be copied to the container
# ADD app /app

# CMD ["/sail_with_kingstuffy/app.js", "--no-daemon"]

RUN cd /sail_with_kingstuffy