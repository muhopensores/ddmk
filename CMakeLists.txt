cmake_minimum_required(VERSION 3.16)
project(ddmk)

# Include the magic
include(magic.cmake)

include_directories(${CMAKE_SOURCE_DIR}/Core)
#message(${CMAKE_SOURCE_DIR}/Core)
#include_directories(${CMAKE_SOURCE_DIR}/dependencies/imgui)
#include_directories(${CMAKE_SOURCE_DIR}/dependencies/minhook/include)
#include_directories(${CMAKE_SOURCE_DIR}/dependencies/spdlog/include)
#include_directories(${CMAKE_SOURCE_DIR}/dependencies/glm)

add_library(imgui STATIC
            imgui/imgui_widgets.cpp
            imgui/imgui_draw.cpp
            imgui/imgui_impl_win32.cpp
            imgui/imgui_impl_dx11.cpp
            imgui/imgui.cpp)

# set output directories
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /Zc:threadSafeInit- /MP")
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
add_compile_options("/std:c++latest")
add_compile_options("/Zc:preprocessor")


foreach(OUTPUTCONFIG ${CMAKE_CONFIGURATION_TYPES})
    string(TOUPPER ${OUTPUTCONFIG} OUTPUTCONFIG)
    set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_${OUTPUTCONFIG} ${CMAKE_BINARY_DIR}/bin)
    set(CMAKE_LIBRARY_OUTPUT_DIRECTORY_${OUTPUTCONFIG} ${CMAKE_BINARY_DIR}/lib)
    set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY_${OUTPUTCONFIG} ${CMAKE_BINARY_DIR}/lib)
endforeach(OUTPUTCONFIG CMAKE_CONFIGURATION_TYPES)

string(REGEX REPLACE "/MD" "/MT" CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE}")

#add_subdirectory(dinput8)
#add_subdirectory(Eva)
#add_subdirectory(Kyrie)
#add_subdirectory(Lucia)
add_subdirectory(Core)
add_subdirectory(Mary)
#add_subdirectory(Zip)

# Create a project
#magic_add_executable(hello_world
#    main.cpp
#    hello.ixx
#    hello.cpp)