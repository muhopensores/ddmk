file (GLOB_RECURSE MARY_SRC *.cpp *.ixx *.h)

magic_add_library(Mary SHARED
                  ${MARY_SRC}
)

target_link_libraries(Mary PUBLIC Core dinput8 dxguid ${CMAKE_SOURCE_DIR}/Zip/zipstatic.lib  ${CMAKE_SOURCE_DIR}/Zip/zlibstatic.lib)
include_directories(${CMAKE_SOURCE_DIR}/Zip)
include_directories(${CMAKE_SOURCE_DIR}/Core)